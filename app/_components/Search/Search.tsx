"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/_utils";
import { InputProps, useInput } from "@nextui-org/input";
import { GlowComponent, GlowProps } from "../ui";
import { CloseFilledIcon } from "@nextui-org/shared-icons";

interface Props extends InputProps, GlowProps {}
interface InitialProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Search({
  onSubmit,
  onChange,
  glowColor,
  glowRadius,
  disableGlow,
  ...props
}: Props & InitialProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);
  const {
    Component,
    shouldLabelBeInside,
    shouldLabelBeOutside,
    description,
    errorMessage,
    domRef,
    isClearable,
    endContent,
    startContent,
    label,
    getBaseProps,
    getClearButtonProps,
    getDescriptionProps,
    getErrorMessageProps,

    getInnerWrapperProps,
    getInputProps,
    getInputWrapperProps,
    getLabelProps,
  } = useInput({
    ...props,
    ref: inputRef,
    value,
    onChange: (e) => {
      if (!animating) {
        setValue(e.target.value);
        onChange && onChange(e);
      }
    },
    classNames: { input: [animating && "text-transparent", props.classNames?.input] },
  });

  const labelContent = <label {...getLabelProps()}>{label}</label>;
  const draw = useCallback(() => {
    if (!inputRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, 800, 800);
    const computedStyles = getComputedStyle(inputRef.current);

    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = "#FFF";
    ctx.fillText(value, 16, 40);

    const imageData = ctx.getImageData(0, 0, 800, 800);
    const pixelData = imageData.data;
    const newData: any[] = [];

    for (let t = 0; t < 800; t++) {
      let i = 4 * t * 800;
      for (let n = 0; n < 800; n++) {
        let e = i + 4 * n;
        if (pixelData[e] !== 0 && pixelData[e + 1] !== 0 && pixelData[e + 2] !== 0) {
          newData.push({
            x: n,
            y: t,
            color: [pixelData[e], pixelData[e + 1], pixelData[e + 2], pixelData[e + 3]],
          });
        }
      }
    }

    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
    }));
  }, [value]);

  useEffect(() => {
    draw();
  }, [value, draw]);
  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = [];
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i];
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            newArr.push(current);
          }
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800);
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          setValue("");
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !animating) {
      vanishAndSubmit();
    }
  };

  const vanishAndSubmit = () => {
    setAnimating(true);
    draw();

    const value = inputRef.current?.value || "";
    if (value && inputRef.current) {
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0,
      );
      animate(maxX);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    vanishAndSubmit();
    onSubmit && onSubmit(e);
  };

  const end = React.useMemo(() => {
    if (isClearable) {
      return <span {...getClearButtonProps()}>{endContent || <CloseFilledIcon />}</span>;
    }

    return endContent;
  }, [isClearable, getClearButtonProps, endContent]);

  const canvas = useMemo(
    () => (
      <canvas
        className={cn(
          "pointer-events-none absolute  left-[1.14rem] top-[7%] origin-top-left scale-50 transform pr-20 text-base invert filter dark:invert-0",
          !animating ? "opacity-0" : "opacity-100",
          props.size === "md" && "left-[1.6rem] top-[11%]",
        )}
        ref={canvasRef}
      />
    ),
    [canvasRef, animating, props.size],
  );
  const innerWrapper = React.useMemo(() => {
    if (startContent || end) {
      return (
        <div
          className={cn(
            "group-focus-visible:outline-none group-focus-visible:ring-[2px]  group-focus-visible:ring-default-600",
          )}
          {...getInnerWrapperProps()}
        >
          {startContent}
          {canvas}
          <input {...getInputProps()} onKeyDown={handleKeyDown} />
          {end}
        </div>
      );
    }

    return (
      <>
        {canvas}
        <input {...getInputProps()} />
      </>
    );
  }, [startContent, end, getInputProps, getInnerWrapperProps, canvas]);

  return (
    <Component {...getBaseProps()}>
      {shouldLabelBeOutside ? labelContent : null}
      {!disableGlow || props.variant === "faded" || props.variant === "flat" ? (
        <GlowComponent radius={glowRadius} glowColor={glowColor}>
          <form
            onSubmit={handleSubmit}
            onKeyDown={(e) => {
              //   e.preventDefault();
              if (e.key === "Enter" && !animating) {
                e.currentTarget.requestSubmit();
              }
            }}
            style={{ width: "-webkit-fill-available" }}
            {...getInputWrapperProps()}
            onClick={() => {
              domRef.current?.focus();
            }}
          >
            {shouldLabelBeInside ? labelContent : null}

            {innerWrapper}
          </form>
        </GlowComponent>
      ) : (
        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            //   e.preventDefault();
            if (e.key === "Enter" && !animating) {
              e.currentTarget.requestSubmit();
            }
          }}
          style={{ width: "-webkit-fill-available" }}
          onClick={() => {
            domRef.current?.focus();
          }}
          {...getInputWrapperProps()}
        >
          {shouldLabelBeInside ? labelContent : null}
          {innerWrapper}
        </form>
      )}
      {description && <div {...getDescriptionProps()}>{description}</div>}
      {errorMessage && <div {...getErrorMessageProps()}>{errorMessage}</div>}
    </Component>
  );
}

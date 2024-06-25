import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
// import { ExamRecords } from "./components";
import { MotionLink } from "@/_components/Motion";
export default async function ExamRecord() {
  return (
    <Card>
      <CardBody className="flex flex-col gap-7">
        <h4 className="text-2xl">Exam Records</h4>
        {/* new record */}
        <div className=" flex flex-row ">
          <Button
            as={MotionLink}
            color="success"
            variant="solid"
            className="bg-success-200 px-4 py-2 text-success-900 hover:bg-success-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            href="/admin/examRecord/create"
          >
            Create New Record...
          </Button>
        </div>
        <div className="flex flex-col gap-4">{/* <ExamRecords /> */}</div>
      </CardBody>
    </Card>
  );
}

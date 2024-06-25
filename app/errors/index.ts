export interface ErrorProps {
  error: NextError;
  reset: () => void;
}
export class NextError extends Error {
  digest?: string;

  constructor(message: string, digest?: string) {
    super();
    this.digest = digest;
    this.message = message;
  }
}
export class UnauthenticatedError extends NextError {
  constructor() {
    const message = "You are not authenticated. Please login now.";
    super(message);
    this.message = message;
  }
}

export function reqLogger(req: any, _res: any, next: any) {
  console.info(`${req.method} request to "${req.url}" by ${req.hostname}`);
  next();
}

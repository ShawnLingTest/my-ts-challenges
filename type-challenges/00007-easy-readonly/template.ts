type MyReadonly<T, K extends keyof T> = {
 readonly [P in K]: T[P];
};

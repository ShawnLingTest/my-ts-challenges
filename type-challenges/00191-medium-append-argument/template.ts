type AppendArgument<Fn extends Function, A> =
  Fn extends (...args: infer U) => infer R ? (...args: [... U, A]) => R : Fn;

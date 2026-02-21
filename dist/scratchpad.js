// scratchpad/src/scratchpad_output.ts
class ScratchpadOutput {
  stdout = [];
  stderr = [];
  log(...args) {
    this.stdout.push(args.map(String).join(" "));
  }
  error(err) {
    this.stderr.push(String(err));
  }
  clear() {
    this.stdout.length = 0;
    this.stderr.length = 0;
  }
}
function wrapConsole(onLog, onError) {
  const original = {
    log: console.log,
    error: console.error,
    warn: console.warn,
    info: console.info
  };
  console.log = (...args) => {
    onLog(args);
    original.log.apply(console, args);
  };
  console.error = (...args) => {
    onError(args);
    original.error.apply(console, args);
  };
  console.warn = (...args) => {
    onError(args);
    original.warn.apply(console, args);
  };
  console.info = (...args) => {
    onLog(args);
    original.info.apply(console, args);
  };
  return () => {
    console.log = original.log;
    console.error = original.error;
    console.warn = original.warn;
    console.info = original.info;
  };
}
export {
  wrapConsole,
  ScratchpadOutput
};

//# debugId=5CB77F0A984E7F3464756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic2NyYXRjaHBhZC9zcmMvc2NyYXRjaHBhZF9vdXRwdXQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiZXhwb3J0IGNsYXNzIFNjcmF0Y2hwYWRPdXRwdXQge1xuXHQvKiogQHR5cGUge3N0cmluZ1tdfSAqL1xuXHRzdGRvdXQ6IHN0cmluZ1tdID0gW107XG5cdC8qKiBAdHlwZSB7c3RyaW5nW119ICovXG5cdHN0ZGVycjogc3RyaW5nW10gPSBbXTtcblxuXHRsb2coLi4uYXJnczogYW55W10pOiB2b2lkIHtcblx0XHR0aGlzLnN0ZG91dC5wdXNoKGFyZ3MubWFwKFN0cmluZylcblx0XHQgICAgICAgICAgICAgICAgICAgICAuam9pbihcIiBcIikpO1xuXHR9XG5cblx0ZXJyb3IoZXJyOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnN0ZGVyci5wdXNoKFN0cmluZyhlcnIpKTtcblx0fVxuXG5cdGNsZWFyKCk6IHZvaWQge1xuXHRcdHRoaXMuc3Rkb3V0Lmxlbmd0aCA9IDA7XG5cdFx0dGhpcy5zdGRlcnIubGVuZ3RoID0gMDtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcENvbnNvbGUob25Mb2c6IEZ1bmN0aW9uLCBvbkVycm9yOiBGdW5jdGlvbik6ICgpID0+IHZvaWQge1xuXHRjb25zdCBvcmlnaW5hbCA9IHtcblx0XHRsb2c6IGNvbnNvbGUubG9nLFxuXHRcdGVycm9yOiBjb25zb2xlLmVycm9yLFxuXHRcdHdhcm46IGNvbnNvbGUud2Fybixcblx0XHRpbmZvOiBjb25zb2xlLmluZm9cblx0fTtcblxuXHRjb25zb2xlLmxvZyA9ICguLi5hcmdzKSA9PiB7XG5cdFx0b25Mb2coYXJncyk7XG5cdFx0b3JpZ2luYWwubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuXHR9O1xuXG5cdGNvbnNvbGUuZXJyb3IgPSAoLi4uYXJncykgPT4ge1xuXHRcdG9uRXJyb3IoYXJncyk7XG5cdFx0b3JpZ2luYWwuZXJyb3IuYXBwbHkoY29uc29sZSwgYXJncyk7XG5cdH07XG5cblx0Y29uc29sZS53YXJuID0gKC4uLmFyZ3MpID0+IHtcblx0XHRvbkVycm9yKGFyZ3MpO1xuXHRcdG9yaWdpbmFsLndhcm4uYXBwbHkoY29uc29sZSwgYXJncyk7XG5cdH07XG5cblx0Y29uc29sZS5pbmZvID0gKC4uLmFyZ3MpID0+IHtcblx0XHRvbkxvZyhhcmdzKTtcblx0XHRvcmlnaW5hbC5pbmZvLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuXHR9O1xuXG5cdHJldHVybiAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc29sZS5sb2cgPSBvcmlnaW5hbC5sb2c7XG5cdFx0Y29uc29sZS5lcnJvciA9IG9yaWdpbmFsLmVycm9yO1xuXHRcdGNvbnNvbGUud2FybiA9IG9yaWdpbmFsLndhcm47XG5cdFx0Y29uc29sZS5pbmZvID0gb3JpZ2luYWwuaW5mbztcblx0fTtcbn1cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7QUFBTyxNQUFNLGlCQUFpQjtBQUFBLEVBRTdCLFNBQW1CLENBQUM7QUFBQSxFQUVwQixTQUFtQixDQUFDO0FBQUEsRUFFcEIsR0FBRyxJQUFJLE1BQW1CO0FBQUEsSUFDekIsS0FBSyxPQUFPLEtBQUssS0FBSyxJQUFJLE1BQU0sRUFDVixLQUFLLEdBQUcsQ0FBQztBQUFBO0FBQUEsRUFHaEMsS0FBSyxDQUFDLEtBQWdCO0FBQUEsSUFDckIsS0FBSyxPQUFPLEtBQUssT0FBTyxHQUFHLENBQUM7QUFBQTtBQUFBLEVBRzdCLEtBQUssR0FBUztBQUFBLElBQ2IsS0FBSyxPQUFPLFNBQVM7QUFBQSxJQUNyQixLQUFLLE9BQU8sU0FBUztBQUFBO0FBRXZCO0FBRU8sU0FBUyxXQUFXLENBQUMsT0FBaUIsU0FBK0I7QUFBQSxFQUMzRSxNQUFNLFdBQVc7QUFBQSxJQUNoQixLQUFLLFFBQVE7QUFBQSxJQUNiLE9BQU8sUUFBUTtBQUFBLElBQ2YsTUFBTSxRQUFRO0FBQUEsSUFDZCxNQUFNLFFBQVE7QUFBQSxFQUNmO0FBQUEsRUFFQSxRQUFRLE1BQU0sSUFBSSxTQUFTO0FBQUEsSUFDMUIsTUFBTSxJQUFJO0FBQUEsSUFDVixTQUFTLElBQUksTUFBTSxTQUFTLElBQUk7QUFBQTtBQUFBLEVBR2pDLFFBQVEsUUFBUSxJQUFJLFNBQVM7QUFBQSxJQUM1QixRQUFRLElBQUk7QUFBQSxJQUNaLFNBQVMsTUFBTSxNQUFNLFNBQVMsSUFBSTtBQUFBO0FBQUEsRUFHbkMsUUFBUSxPQUFPLElBQUksU0FBUztBQUFBLElBQzNCLFFBQVEsSUFBSTtBQUFBLElBQ1osU0FBUyxLQUFLLE1BQU0sU0FBUyxJQUFJO0FBQUE7QUFBQSxFQUdsQyxRQUFRLE9BQU8sSUFBSSxTQUFTO0FBQUEsSUFDM0IsTUFBTSxJQUFJO0FBQUEsSUFDVixTQUFTLEtBQUssTUFBTSxTQUFTLElBQUk7QUFBQTtBQUFBLEVBR2xDLE9BQU8sTUFBWTtBQUFBLElBQ2xCLFFBQVEsTUFBTSxTQUFTO0FBQUEsSUFDdkIsUUFBUSxRQUFRLFNBQVM7QUFBQSxJQUN6QixRQUFRLE9BQU8sU0FBUztBQUFBLElBQ3hCLFFBQVEsT0FBTyxTQUFTO0FBQUE7QUFBQTsiLAogICJkZWJ1Z0lkIjogIjVDQjc3RjBBOTg0RTdGMzQ2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9

import { renderHook, act } from "@testing-library/react-hooks";
import { useInputValue } from "./useInputValue";

describe("custom hook value", () => {
  test("render component", () => {
    const { result } = renderHook(() => useInputValue());

    expect(result.current.onChange).toBeInstanceOf(Function);
  });

  test("test for initial value", () => {
    const { result } = renderHook(() => useInputValue());

    act(() => {
      result.current.onChange({ target: { value: "test initial value" } });
    });

    expect(result.current.value).toBe("test initial value");
  });

  test("test for inner text value", () => {
    const { result } = renderHook(() => useInputValue());

    act(() => {
      result.current.onChange({ target: { innerText: "test inner text" } });
    });

    expect(result.current.value).toBe("test inner text");
  });

  test("test for re-render initial value ", () => {
    const { result, rerender } = renderHook(() => useInputValue());

    act(() => {
      result.current.onChange({ target: { value: "test initial value" } });
    });

    rerender("Updated");
    expect(result.current.value).toBe("test initial value");
  });
});

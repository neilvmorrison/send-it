import useAsyncCall from ".";
import { renderHook, act } from "@testing-library/react-hooks";

async function successCall(): Promise<string> {
  return Promise.resolve("SUCCESS");
}

async function failCall(): Promise<string> {
  return Promise.resolve("FAIL");
}

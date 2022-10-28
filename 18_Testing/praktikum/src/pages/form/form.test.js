import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NameForm from "./FormCoding";
import userEvent from "@testing-library/user-event";

describe("NameForm", () => {
  test("render component", () => {
    render(<NameForm />);

    expect(
      screen.getByText("Pendaftaran Peserta Coding Bootcamp")
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/No Handphone:/)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Latar Belakang Pendidikan:/)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Kelas Coding yang Dipilih:/)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Foto Surat Kesungguhan:/)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)
    ).toBeInTheDocument();
  });

  test("test input valid value", () => {
    render(<NameForm />);

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "test Name" },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "testEmail@mail.com" },
    });

    fireEvent.input(screen.getByRole("spinbutton", { name: /no handphone/i }), {
      target: { value: "123456789" },
    });

    fireEvent.change(screen.getByRole("radio", { name: /pendidikan/i }));
    fireEvent.click(screen.getByLabelText(/IT/), { target: { value: "IT" } });

    const selectedItem = screen.getByRole("combobox", { name: /kelas/i });
    userEvent.selectOptions(selectedItem, "reactjs");

    const testImageFile = new File(
      ["testFile"],
      "testFile.pdf",
      { name: /surat kesungguhan/i },
      { type: "image/*,.pdf" }
    );
    const fileInput = screen.getByLabelText(/Foto Surat Kesungguhan:/);

    fireEvent.input(screen.getByRole("textbox", { name: /harapan/i }), {
      target: { value: "test harapan" },
    });

    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("test Name");
    expect(screen.getByLabelText(/Email:/)).toHaveValue("testEmail@mail.com");
    expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue(
      "123456789"
    );
    expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeChecked();

    expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue(
      "reactjs"
    );

    expect(fileInput.files.length).toBe(0);
    userEvent.upload(fileInput, testImageFile);

    expect(
      screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)
    ).toHaveValue("test harapan");
  });

  test("test invalid name", () => {
    render(<NameForm />);

    fireEvent.input(
      screen.getByRole("textbox", {
        name: /nama/i,
      }),
      { target: { value: "this is invalid 12@@ for name" } }
    );
    expect(
      screen.getByText("Nama Lengkap Harus Berupa Huruf")
    ).toBeInTheDocument();
  });

  test("test invalid email", () => {
    render(<NameForm />);

    fireEvent.input(
      screen.getByRole("textbox", {
        name: /email/i,
      }),
      { target: { value: "this is invalid 12@@ for email" } }
    );
    expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
  });

  test("test case invalid phone number with phone number with character less than 9 and more 14 character", () => {
    render(<NameForm />);

    fireEvent.input(
      screen.getByRole("spinbutton", {
        name: /no handphone/i,
      }),
      { target: { value: "123" } }
    );

    fireEvent.input(
      screen.getByRole("spinbutton", {
        name: /no handphone/i,
      }),
      { target: { value: "12345678910203040" } }
    );
    expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument();
  });
});

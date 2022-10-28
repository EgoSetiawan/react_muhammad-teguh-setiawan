import "./register.css";
import { useState, useRef } from "react";

function Register() {
  const baseData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };
  const baseError = {
    nama: "",
    email: "",
    noHandphone: "",
  };

  const [data, setData] = useState(baseData);
  const [errMsg, setErrMsg] = useState(baseError);
  const suratKesungguhan = useRef(null);

  const nameValidition = new RegExp(/^[A-Za-z]+$/);
  const emailValidition = new RegExp(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g);
  const handphoneValidition = new RegExp(/^[0-9]*$/);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "nama") {
      if (nameValidition.test(value) || value === "") {
        setErrMsg({ ...errMsg, nama: "" });
      } else {
        setErrMsg({
          ...errMsg,
          nama: "Nama Lengkap Harus Berupa Huruf",
        });
      }
    }

    if (name === "email" || value === "") {
      if (emailValidition.test(value)) {
        setErrMsg({ ...errMsg, email: "" });
      } else {
        setErrMsg({ ...errMsg, email: "Email Tidak Sesuai" });
      }
    }

    if (name === "noHandphone" || value === "") {
      if (handphoneValidition.test(value)) {
        setErrMsg({ ...errMsg, noHandphone: "" });
      } else {
        setErrMsg({
          ...errMsg,
          noHandphone: "No Handphone Tidak Sesuai",
        });
      }
    }
    setData({
      ...data,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    if (errMsg.nama !== "" || errMsg.email !== "" || errMsg.noHandphone) {
      alert("data tidak sesuai");
    } else {
      alert("data telah diterima");
      resetData();
    }
    console.log(data);
    e.preventDefault();
  }

  function resetData() {
    setData(baseData);
    setErrMsg(baseError);
  }

  return (
    <div className="register-container">
      <div className="header">
        <h2>Pendaftaran Peserta Coding Bootcamp</h2>
      </div>
      <div className="form-container">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="form-regis">
              <label htmlFor="nama"> Nama Lengkap </label> <br />
              <input
                type="text"
                id="nama"
                name="nama"
                onChange={handleChange}
                value={data.nama}
                placeholder="Your name ..."
                required
              />
              <br />
            </div>
            <div className="form-regis">
              <label htmlFor="email"> Email </label> <br />
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                value={data.email}
                placeholder="Your email ..."
                required
              />
              <br />
            </div>
            <div className="form-regis">
              <label htmlFor="noHandphone"> Nomor Handphone </label> <br />
              <input
                type="text"
                id="noHandphone"
                name="noHandphone"
                onChange={handleChange}
                value={data.noHandphone}
                placeholder="Your phonenumber ..."
                required
              />
              <br />
            </div>
            <div className="form-regis">
              <label htmlFor="pendidikan"> Latar Pendidikan </label> <br />
              <input
                type="radio"
                id="pendidikan"
                className="input-radio"
                name="pendidikan"
                value="IT"
                onChange={handleChange}
                required
              />
              <label>IT</label>
              <input
                type="radio"
                id="pendidikan"
                className="input-radio"
                name="pendidikan"
                value="Non-IT"
                onChange={handleChange}
              />
              <label>Non IT</label>
              <br />
            </div>
            <div className="form-regis">
              <label>Kelas Coding Yang Dipilih:</label> <br />
              <select
                className="selectbox"
                onChange={handleChange}
                value={data.kelas}
                name="kelas"
                required
              >
                <option hidden value="">
                  Pilih Salah Satu Program
                </option>
                <option value="Coding Backend with Golang">
                  Coding Backend with Golang
                </option>
                <option value="Coding Frontend with ReactJS">
                  Coding Frontend with ReactJS
                </option>
                <option value="Fullstack Developer">Fullstack Developer</option>
              </select>
              <br />
            </div>
            <div className="form-regis">
              <label>Foto Surat Kesungguhan</label>
              <br />
              <input
                className="input-label"
                name="suratKesungguhan"
                type="file"
                refs={suratKesungguhan}
              />
            </div>
            <div className="form-regis">
              <label>Harapan untuk coding bootcamp ini</label>
              <br />
              <textarea
                name="harapan"
                rows="5"
                value={data.harapan}
                onChange={handleChange}
              />
              <br />
            </div>
            <span className="err-msg">{errMsg.nama}</span>
            <span className="err-msg">{errMsg.email}</span>
            <span className="err-msg">{errMsg.noHandphone}</span>
            <div className="button">
              <input type="submit" value="Submit" className="btn-smt" />
              <button onClick={resetData} className="btn-rst">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

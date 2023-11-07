import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css';
import Head from "next/head";
import React, {useState} from "react";

export default function Calc() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly;
    fetch('/some-api', {method: form.method, body: formData });
  }

  const [price, setPrice] =useState("");
  const priceAsNumber = Number(price);

  return (
    <div>
      <form onSubmit={handleSubmit} method="post">
        <label>
          金額: <input
            name="fee"
            type="number"
            value= {price}
            onChange={e => setPrice(e.target.value)}
          />
        </label>
        <hr />
        <button type="reset" onClick={() => setPrice("")}>Reset</button>
        <button onClick={() => setPrice(Math.round(priceAsNumber *1.1))}>税込金額</button>
        <button type="submit">Submit</button>
      </form>
      <p>{priceAsNumber}</p>
    </div>
  );
}
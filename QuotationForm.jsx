import React, { useState } from 'react';

function QuotationForm({ onSave }) {
  const [form, setForm] = useState({
    quotationNo: '',
    customer: '',
    date: '',
    product: '',
    amount: ''
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="quotationNo" placeholder="報價單單號" value={form.quotationNo} onChange={handleChange} required />
      <input name="customer" placeholder="客戶名稱" value={form.customer} onChange={handleChange} required />
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <input name="product" placeholder="產品資訊" value={form.product} onChange={handleChange} required />
      <input name="amount" placeholder="金額" value={form.amount} onChange={handleChange} required />
      <button type="submit">儲存</button>
    </form>
  );
}
export default QuotationForm;
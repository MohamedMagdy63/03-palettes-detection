'use client'
import Image from "next/image";
import * as React from 'react';
import {useState} from 'react';
import carModel from '../Images/carModel-1.jpg'


export default function Home() {
  const currentDate = new Date(); // Get the current date
  const [language, setLanguage] = useState('En');
  const [name, setName] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [plateLetters, setPlateLetters] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [leavingDate, setLeavingDate] = useState('');

  let entryDateOpject=new Date(entryDate)
  let leavingDateOpject=new Date(leavingDate)
  let checkDate = false
  let checkTime = false
  entryDateOpject > currentDate && entryDateOpject <= leavingDateOpject ? checkDate=true : ''
  const [entryTime, setEntryTime] = useState('');
  const [leaveingTime, setLeaveingTime] = useState('');
  console.log(entryTime,leaveingTime)
  leaveingTime > entryTime ? checkTime = true : ''
  const [license, setLicense] = useState('');
  const [reason, setReason] = useState('');
  const numbers = `۰۱۲۳۴۵۶۷۸۹`;
  let convertedPlateNumber = "";
  const str = plateNumber.toString();
  for (let c of str) {
    convertedPlateNumber += numbers.charAt(c);
  }
  const handleLanguage = () => {
    setLanguage(language === 'En' ? 'ع' : 'En');
  };
  let correct = null
  const handleSubmit = (e) => {
    e.preventDefault();  
    checkDate && checkTime &&
    console.log(name, convertedPlateNumber, plateLetters, entryDate, entryTime, leaveingTime, license, reason)
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 ">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">{` ${language === 'ع' ? 'إدخال بيانات المركبة المطلوب ادخالها' : 'Insert Required Vehicle Data'}`}</h1>
        <p className="text-gray-300">{` ${language === 'ع' ? 'تأكد من دقة تفاصيل الخاصة بمركبتك' : 'Ensure accurate details for your vehicle.'}`}</p>
        <div>
          <button onClick={handleLanguage} className="px-5 py-2 rounded-xl bg-[#135D66] m-2 ">{language === 'En' ? 'ع' : 'En'}</button>
        </div>
      </div>
      {/* Data Card */}
      <div className="lg:flex md:flex items-center justify-center p-10 rounded-2xl bg-white">
        {/* Image box */}
        <div className="m-6">
          <Image src={carModel} alt="Car Model" width={500} height={500}  />
        </div>
        {/* Form */}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={` ${language === 'ع' ? 'اسم السائق' : 'Driver Name'}`}
            className={`input-field mb-4 p-2 rounded-lg outline-none text-white bg-[#041920] ${language === 'ع' ? 'text-right' : 'text-left'}`}
            required
            onChange={(e)=>setName(e.target.value)}
          />
          <input
            type="number"
            placeholder={` ${language === 'ع' ? 'رقم اللوحة' : 'Plate Numbers'}`}
            className={`input-field mb-4 p-2 rounded-lg outline-none text-white bg-[#041920] ${language === 'ع' ? 'text-right' : 'text-left'}`}
            min={0}
            required
            onChange={(e)=>setPlateNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder={` ${language === 'ع' ? 'حروف اللوحة' : 'Plate Letters'}`}
            className={`input-field mb-4 p-2 rounded-lg outline-none text-white bg-[#041920] ${language === 'ع' ? 'text-right' : 'text-left'}`}
            required
            onChange={(e)=>setPlateLetters(e.target.value)}
          />
          <label className={`font-mono text-sm text-[#003C43] ${language === 'ع' ? 'text-right' : 'text-left'}`}>
            {` ${language === 'ع' ? 'تاريخ الدخول' : 'Entry Date'}`}
          </label>
          <input
            type="date"
            placeholder={` ${language === 'ع' ? 'تاريخ الدخول' : 'Entry Date'}`}
            className={`input-field mb-4 p-2 rounded-lg outline-none text-white bg-[#041920] ${language === 'ع' ? 'text-right' : 'text-left'}`}
            required
            style={{ 
              'color-scheme': 'dark',
            }}
            onChange={(e)=>setEntryDate(e.target.value)}
          />
          <label className={`font-mono text-sm text-[#003C43] ${language === 'ع' ? 'text-right' : 'text-left'}`}>
            {` ${language === 'ع' ? 'تاريخ الخروج' : 'Leaving Date'}`}
          </label>
          <input
            type="date"
            placeholder={` ${language === 'ع' ? 'تاريخ الخروج' : 'Leaving Date'}`}
            className={`input-field mb-4 p-2 rounded-lg outline-none text-white bg-[#041920] ${language === 'ع' ? 'text-right' : 'text-left'}`}
            required
            style={{'color-scheme': 'dark'}}
            onChange={(e)=>setLeavingDate(e.target.value)}
          />
          <label className={`font-mono text-sm text-[#003C43] ${language === 'ع' ? 'text-right' : 'text-left'}`}>
            {` ${language === 'ع' ? 'وقت الدخول' : 'Entry Time'}`}
          </label>
          <input
            type="time"
            placeholder={` ${language === 'ع' ? 'وقت الدخول' : 'Entry Time'}`}
            className={`input-field mb-4 p-2 rounded-lg outline-none text-white bg-[#041920] ${language === 'ع' ? 'text-right' : 'text-left'}`}
            required
            style={{ 'color-scheme': 'dark'}}
            onChange={(e)=>setEntryTime(e.target.value)}
          />
          <label className={`font-mono text-sm text-[#003C43] ${language === 'ع' ? 'text-right' : 'text-left'}`}>
            {` ${language === 'ع' ? 'وقت المغادرة' : 'Leaving Time'}`}
          </label>
          <input
            type="time"
            placeholder="Leaving Time"
            className={`input-field mb-4 p-2 rounded-lg outline-none text-white bg-[#041920] ${language === 'ع' ? 'text-right' : 'text-left'}`}
            required
            style={{'color-scheme': 'dark'}}
            onChange={(e)=>setLeaveingTime(e.target.value)}
          />
          <label className={`font-mono text-sm text-[#003C43] ${language === 'ع' ? 'text-right' : 'text-left'}`}>
            {` ${language === 'ع' ? 'رخصة السائق' : "Driver's license"}`}
          </label>
          <input 
            type="file" 
            accept="image/*"
            className={`input-field mb-4 p-2 rounded-lg outline-none text-white caret-white	 bg-[#041920] ${language === 'ع' ? 'text-right' : 'text-left'}`}
            required
            onChange={(e)=>setLicense(e.target.value)}
          />
          <textarea
            type="text"
            placeholder={` ${language === 'ع' ? 'السبب في الدخول' : "Reason of Entry"}`}
            className="input-field mb-4 p-2 rounded-lg outline-none text-white bg-[#041920]"
            required
            onChange={(e)=>setReason(e.target.value)}
          />
          {
            checkTime && checkDate === true ? 
            ''
            // <div className="text-white p-2 m-1 bg-green-400">submit date</div>
            :
            <div className="text-white p-2 m-1 bg-red-400">Invalid entered date or time</div>
          }
          <button type="submit" className="btn bg-[#003C43] text-white p-3 rounded-xl hover:bg-[#003c437f]">
            {` ${language === 'ع' ? 'إرسال' : "Submit"}`}
          </button>
        </form>
      </div>
    </main>
  );
}

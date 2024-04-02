import React, { useEffect, useState } from "react";
import { submit, update } from "../store/postSlice";
import { useDispatch, useSelector } from "react-redux";

import Input from "./Input";
import Table from "./Table";
import error from "../error";

function AddDetails() {
  const [profilePicture, setProfilePicture] = useState();
  const [errors, setErrors] = useState(false);
  const [fieldErrors, setFieldErrors] = useState();
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);

  const userValue = useSelector((state) => state.userData);
  const [value, setValue] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    city: "",
    district: "",
    province: "",
    country: "Nepal",
  });

  const province = [
    "Province",
    "Province 1",
    "Province 2",
    "Province 3",
    "Province 4",
    "Province 5",
    "Province 6",
    "Province 7",
  ];

  // for input field handle change
  const handleChange = (e) => {
    const { id, value } = e.target;

    setValue((updatedValue) => ({
      ...updatedValue,
      [e.target.id]: e.target.value,
    }));

    const errorMessage = error(value, id);

    if (errorMessage) {
      setErrors(true);
    } else {
      setErrors(false);
    }

    setFieldErrors((prevError) => ({ ...prevError, [id]: errorMessage }));
  };

  // for select field options
  const handleProvince = (e) => {
    const selectedProvince = e.target.value;
    setValue({ ...value, province: selectedProvince });
  };

  // for handling image file
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      console.log(url);
      setProfilePicture(`${url}`);
      console.log(profilePicture, "profile");
    }
  };
  useEffect(() => {
    console.log(profilePicture, "profile");
  }, [profilePicture]);

  console.log(profilePicture);

  //handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = Math.floor(Math.random() * 900000);
    const formValue = { ...value, profilePicture, userId: userId };
    if (!errors) {
      if (!isUpdate) {
        dispatch(submit(formValue));
        console.log(profilePicture, 'pp')
      } else {
        console.log(value.userId, 'userIDkkk')
        dispatch(update(value));
        setIsUpdate(false);
      }
      setValue({
        name: "",
        email: "",
        phoneNumber: "",
        dateOfBirth: "",
        city: "",
        district: "",
        province: "",
        country: "Nepal",
      });
      // setProfilePicture({ profilePicture: "" });
    }
  };

  


  return (
    <div className="p-5">
      <div className="flex justify-center p-5">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-10 gap-x-20"
        >
          <Input
            type="text"
            label="Name"
            id="name"
            placeholder="
          Enter name "
            value={value.name}
            onChange={handleChange}
            error={fieldErrors?.name}
            // required
          />
          <Input
            type="email"
            label="Email"
            id="email"
            placeholder="
          Enter email "
            value={value.email}
            onChange={handleChange}
            error={fieldErrors?.email}
          />
          <Input
            type="number"
            label="Phone number"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="
          Enter number "
            value={value.phoneNumber}
            onChange={handleChange}
            error={fieldErrors?.phoneNumber}
          />
          <Input
            type="date"
            label="Date of Birth"
            id="dateOfBirth"
            value={value.dateOfBirth}
            onChange={handleChange}
          />
          <Input
            type="text"
            label="City"
            id="city"
            name="city"
            value={value.city}
            onChange={handleChange}
            placeholder="Enter city"
          />
          <Input
            name="district"
            type="district"
            label="District"
            id="district"
            placeholder="Enter District"
            value={value.district}
            onChange={handleChange}
          />
          <Input
            type="country"
            label="Country"
            id="country"
            name="country"
            value={value.country}
            onChange={handleChange}
          />

          <div>
            <label className="flex flex-col" htmlFor="province">
              Select Province:
            </label>
            <select
              className="p-2 mt-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-50 font-sans text-sm font-normal"
              id="province"
              name="province"
              value={value.province}
              onChange={handleProvince}
            >
              {province.map((province, index) => (
                <option key={index} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>

          <Input
            type="file"
            name="profilePicture"
            label="Profile Pic"
            id="profilePicture"
            onChange={handleFileChange}
            accept=".png"
          />
          {!isUpdate ? (
            <div>
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          ) : (
            <div>
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Update
              </button>
            </div>
          )}
        </form>
      </div>
      <Table value={value} setValue={setValue} setIsUpdate={setIsUpdate} />
      
    </div>
  );
}

export default AddDetails;

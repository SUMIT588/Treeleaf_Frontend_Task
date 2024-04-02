import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ViewDetails() {
  const { userId } = useParams();
  console.log(userId, "id");

  const allUserData = useSelector((state) => state.userData);

  const id = parseInt(userId)
  

  const userInfo = allUserData.filter((data) => data.userId === id)[0];

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg flex flex-col items-center justify-center h-full">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          User Profile
        </h3>
        <img
          src={userInfo.profilePicture}
          alt="Profile"
          className="w-32 h-32 rounded-full mt-4"
        />
      </div>
      <div className="border-t border-gray-200 w-full max-w-md">
        <div className="bg-gray-50 px-4 py-5 grid grid-cols-2 gap-4">
          <div className="text-sm font-medium text-gray-500">Name</div>
          <div className="mt-1 text-sm text-gray-900">{userInfo.name}</div>
          <div className="text-sm font-medium text-gray-500">Email</div>
          <div className="mt-1 text-sm text-gray-900">{userInfo.email}</div>
          <div className="text-sm font-medium text-gray-500">Phone Number</div>
          <div className="mt-1 text-sm text-gray-900">
            {userInfo.phoneNumber}
          </div>
          <div className="text-sm font-medium text-gray-500">Date of Birth</div>
          <div className="mt-1 text-sm text-gray-900">
            {userInfo.dateOfBirth}
          </div>
          <div className="text-sm font-medium text-gray-500">Country</div>
          <div className="mt-1 text-sm text-gray-900">
            {userInfo.country}
          </div>
          <div className="text-sm font-medium text-gray-500">City</div>
          <div className="mt-1 text-sm text-gray-900">
            {userInfo.city}
          </div>
          <div className="text-sm font-medium text-gray-500">Province</div>
          <div className="mt-1 text-sm text-gray-900">
            {userInfo.city}
          </div>
        
        </div>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
}

export default ViewDetails;

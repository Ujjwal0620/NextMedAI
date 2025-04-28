import React from 'react'

const ProfilePage = () => {
  const patient = {
    patientProfile: {
      name: "Ms. Jane Moore",
      contactDetails: {
        mobile: "07123 456789",
        phone: "01980 123456",
        email: "jane.moore@hello.com",
        address: "15 Trevelyan Avenue, London, SW12 J23"
      },
      overview: {
        gender: "Female",
        dateOfBirth: "1987-03-10",
        nextOfKin: "Dan Stevens",
        previousVisit: "2020-11-25",
        nextVisit: "2020-12-09",
        allergies: ["Hayfever", "Crayfish"]
      },
      latestLabResults: [
        {
          name: "Ovarian Scan",
          date: "2020-11-25",
          size: "2.7 MB",
          fileType: "image"
        },
        {
          name: "XYV Blood Tests",
          size: "0.7 MB",
          fileType: "pdf"
        },
        {
          name: "Blood Tests XYZ",
          size: "0.7 MB",
          fileType: "image"
        }
      ],
      sections: [
        "Appointments",
        "Doctors",
        "Treatment",
        "Tests & Results",
        "Vital Signs",
        "Partner Profile",
        "Billing",
        "Consent Forms"
      ]
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Patient Profile</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Side - Profile Info */}
        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full object-cover mb-4"
            src="https://images.unsplash.com/photo-1624421998513-77a9ebb43d0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW4lMjBib3l8ZW58MHx8MHx8fDA%3D"
            alt="Patient"
          />
          <h2 className="text-xl font-bold mb-4">{patient.patientProfile.name}</h2>

          <div className="text-left w-full space-y-2">
            <div><span className="font-semibold text-blue-900">Mobile: </span>{patient.patientProfile.contactDetails.mobile}</div>
            <div><span className="font-semibold text-blue-900">Phone: </span>{patient.patientProfile.contactDetails.phone}</div>
            <div><span className="font-semibold text-blue-900">Email: </span>{patient.patientProfile.contactDetails.email}</div>
            <div><span className="font-semibold text-blue-900">Address: </span>{patient.patientProfile.contactDetails.address}</div>
          </div>
        </div>

        {/* Middle - Overview */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Overview</h2>
          <div className="space-y-2">
            <div><span className="text-blue-950 mr-3 font-semibold">Gender: </span>{patient.patientProfile.overview.gender}</div>
            <div><span className="text-blue-950 mr-3 font-semibold">Date of Birth: </span>{patient.patientProfile.overview.dateOfBirth}</div>
            <div><span className="text-blue-950 mr-3 font-semibold">Next of Kin: </span>{patient.patientProfile.overview.nextOfKin}</div>
            <div><span className="text-blue-950 mr-3 font-semibold">Previous Visit: </span>{patient.patientProfile.overview.previousVisit}</div>
            <div><span className="text-blue-950 mr-3 font-semibold">Next Visit: </span>{patient.patientProfile.overview.nextVisit}</div>
            <div><span className="text-blue-950 mr-3 font-semibold">Allergies: </span>{patient.patientProfile.overview.allergies.join(", ")}</div>
          </div>
        </div>

        {/* Right - Lab Results */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Latest Lab Results</h2>
          <div className="space-y-4">
            {patient.patientProfile.latestLabResults.map((result, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{result.name}</p>
                  {result.date && <p className="text-sm text-gray-500">{result.date}</p>}
                </div>
                <p className="text-sm">{result.size}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600">Upload Files</button>
            <button className="border border-blue-500 text-blue-500 py-1 px-4 rounded-lg hover:bg-blue-100">View All</button>
          </div>
        </div>
      </div>

      {/* Bottom Sections */}
      <div className="bg-white rounded-2xl p-6 shadow-md mt-8">
        <h2 className="text-xl font-bold text-blue-900 mb-6">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {patient.patientProfile.sections.map((section, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-blue-50 hover:bg-blue-100 rounded-lg p-4 text-center font-semibold text-blue-800 shadow-sm cursor-pointer transition"
            >
              {section}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage

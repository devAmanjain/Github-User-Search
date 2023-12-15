import React from 'react'

const Details = ({ data }) => {
    return (
        <div className="w-1/2 mt-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <ul role="list" className="divide-y divide-gray-100">
            <li key={data.email} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4 m-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={data.avatar_url}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {data.login}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {data.followers}
                  </p>
                </div>

                
              </div>
            </li>
          </ul>
        </div>
      </div>
      

    )
}

export default Details

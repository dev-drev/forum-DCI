import React from 'react'

export default function LoginBtn(props) {
    return (
        <div className="flex items-center mt-3 justify-center">
              <button
                type="submit"
                class="w-full lg:w-28 lg:h-12 mt-6 bg-primary rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
              >
                {props.children}
              </button>
            </div>
    )
}

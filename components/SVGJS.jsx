import * as React from "react"

const SvgJs = (props) => (
  <>
  {/* <div className="ring ring--left a"> */}
      <svg
        style={{
          enableBackground: "new 0 0 128 128",
      
        }}
        className="ring ring--left"
        viewBox="0 0 128 128"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"

        {...props}
      >
        <circle
          cx={64}
          cy={64}
          r={50}
          style={{
            fill: "#f0db4f",
          }}
        />
        <path
          d="M48.4 44.6h8.7v24.5c0 11-5.3 14.9-13.7 14.9-2.1 0-4.7-.3-6.4-.9l1-7.1c1.2.4 2.8.7 4.5.7 3.7 0 6-1.7 6-7.6l-.1-24.5zM64.8 74.4c2.3 1.2 6 2.4 9.7 2.4 4 0 6.1-1.7 6.1-4.3 0-2.4-1.8-3.8-6.5-5.4-6.4-2.3-10.7-5.9-10.7-11.6C63.4 49 69 44 78.1 44c4.4 0 7.6.9 9.9 2l-2 7c-1.5-.7-4.3-1.8-8-1.8-3.8 0-5.6 1.8-5.6 3.7 0 2.5 2.1 3.6 7.2 5.5 6.8 2.5 10 6.1 10 11.6 0 6.5-4.9 12-15.6 12-4.4 0-8.8-1.2-11-2.4l1.8-7.2z"
          style={{
            fill: "#323330",
          }}
        />
      </svg>
  
  </>
)

export default SvgJs

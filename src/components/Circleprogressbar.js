import React from 'react'

const Circleprogressbar = ({percent,circlewidth}) => {
    const radius =100;
    const dashArray=radius * Math.PI*2;
    const dashOffset= dashArray-(dashArray*percent)/100;
  return (
    <>
    <svg width={circlewidth} height={circlewidth} viewBox={`0 0 ${circlewidth} ${circlewidth}`}>
        <circle
        cx={circlewidth/2}
        cy={circlewidth/2}
        strokeWidth="20px"
        r={radius}
        className="circle-background"
       />
  <circle
        cx={circlewidth/2}
        cy={circlewidth/2}
        strokeWidth="25px"
        r={radius}
        style={{
            strokeDasharray:dashArray,
            strokeDashoffset:dashOffset,
        }}
       className="circle-progress"
        transform={`rotate(-90 ${circlewidth/2} ${circlewidth/2})`}
        />
<text className='Circle-te' x="50%" y="50%" dy="0.3em" textAnchor='middle' >{percent}%

</text>
    </svg>
    </>
  )
}

export default Circleprogressbar
import * as React from 'react';

type ISVGComponent = {
  height: number;
  width: number;
};

const SvgComponent = (props: ISVGComponent) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 85 125">
    <defs>
      <linearGradient
        id="b"
        x1={150.96}
        x2={112.03}
        y1={192.35}
        y2={137.27}
        gradientTransform="matrix(.56254 0 0 .56797 -14.991 -11.702)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ffd43b" offset={0} />
        <stop stopColor="#ffe873" offset={1} />
      </linearGradient>
      <linearGradient
        id="a"
        x1={26.649}
        x2={135.67}
        y1={20.604}
        y2={114.4}
        gradientTransform="matrix(.56254 0 0 .56797 -14.991 -11.702)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5a9fd4" offset={0} />
        <stop stopColor="#306998" offset={1} />
      </linearGradient>
      <radialGradient
        id="c"
        cx={61.519}
        cy={132.29}
        r={29.037}
        gradientTransform="matrix(0 -.23995 1.0547 0 -83.701 142.46)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#b8b8b8" stopOpacity={0.498} offset={0} />
        <stop stopColor="#7f7f7f" stopOpacity={0} offset={1} />
      </radialGradient>
    </defs>
    <path
      d="M54.919 0c-4.584.022-8.96.413-12.812 1.095-11.346 2.004-13.406 6.2-13.406 13.937V25.25h26.812v3.406H18.638c-7.792 0-14.616 4.684-16.75 13.594-2.462 10.213-2.571 16.586 0 27.25 1.906 7.938 6.458 13.594 14.25 13.594h9.219v-12.25c0-8.85 7.657-16.656 16.75-16.656h26.78c7.456 0 13.407-6.138 13.407-13.625V15.033c0-7.266-6.13-12.725-13.406-13.937C64.282.329 59.503-.02 54.918.002zm-14.5 8.22c2.77 0 5.031 2.298 5.031 5.125 0 2.816-2.262 5.094-5.031 5.094-2.78 0-5.031-2.278-5.031-5.094 0-2.827 2.252-5.125 5.031-5.125z"
      fill="url(#a)"
    />
    <path
      d="M85.638 28.657v11.906c0 9.23-7.826 17-16.75 17H42.107c-7.336 0-13.406 6.279-13.406 13.625v25.531c0 7.266 6.319 11.54 13.406 13.625 8.487 2.496 16.626 2.947 26.781 0 6.75-1.954 13.406-5.888 13.406-13.625V86.5H55.513v-3.406h40.188c7.793 0 10.696-5.436 13.406-13.594 2.8-8.4 2.68-16.476 0-27.25-1.926-7.758-5.604-13.594-13.406-13.594zM70.576 93.313c2.78 0 5.031 2.277 5.031 5.094 0 2.826-2.252 5.125-5.031 5.125-2.77 0-5.031-2.299-5.031-5.125 0-2.817 2.262-5.094 5.031-5.094z"
      fill="url(#b)"
    />
    <ellipse
      cx={55.817}
      cy={127.7}
      rx={35.931}
      ry={6.967}
      fill="url(#c)"
      opacity={0.444}
    />
  </svg>
);

export default SvgComponent;

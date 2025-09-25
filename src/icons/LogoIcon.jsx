const LogoIcon = (props) => (
  <svg
    width="216"
    height="134"
    viewBox="0 0 216 134"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="216" height="133.103" fill="url(#pattern0_280_438)" />
    <defs>
      <pattern
        id="pattern0_280_438"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_280_438"
          transform="matrix(0.00200401 0 0 0.00325212 -0.001002 -0.307018)"
        />
      </pattern>
      <image
        id="image0_280_438"
        width="500"
        height="499"
        preserveAspectRatio="none"
        href={LogoIcon} // ← kluczowe
      />
    </defs>
  </svg>
);

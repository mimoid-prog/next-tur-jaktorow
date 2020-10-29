import React from "react";
import styles from "styles/components/selectBox.module.scss";
import SelectSearch from "react-select-search/dist/cjs";

interface Props {
  value: string;
  handleChange: any;
}

const SelectBox = ({ value, handleChange }: Props) => {
  const options = [
    { name: "Seniorzy", value: "senior" },
    { name: "2005/2006", value: "B2JuniorMlodszy2005_2006" },
    { name: "2007/2008", value: "C2Trampkarz2007_2008" },
    { name: "2009", value: "D2Mlodzik2009" },
    { name: "2010", value: "E1Orlik2010" },
    { name: "2011", value: "E2Orlik2011" }
  ];

  const test = (value) => {
    handleChange(value);
  };

  return (
    <div className={styles.selectBox}>
      <p>Wybierz rocznik:</p>
      {/* <select value={value} onChange={handleChange} className={styles.select}>
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.label}
          </option>
        ))}
      </select> */}
      <SelectSearch id="selectSearch" options={options} onChange={test} />
    </div>
  );
};

export default SelectBox;

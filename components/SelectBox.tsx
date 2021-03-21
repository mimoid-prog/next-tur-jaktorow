import React from "react";
import styles from "styles/components/selectBox.module.scss";
import SelectSearch from "react-select-search/dist/cjs";
import { useRouter } from "next/router";

const SelectBox = ({ initialValue }: { initialValue: string }) => {
  const { push, pathname } = useRouter();

  const [value, setValue] = React.useState(initialValue);

  const options = [
    { name: "Seniorzy", value: "senior" },
    { name: "2005/2006", value: "B2JuniorMlodszy2005_2006" },
    { name: "2007/2008", value: "C2Trampkarz2007_2008" },
    { name: "2009", value: "D2Mlodzik2009" },
    { name: "2010", value: "E1Orlik2010" },
    { name: "2011", value: "E2Orlik2011" }
  ];

  const onChange = (value: string) => {
    setValue(value);
    if (value === "senior") {
      push(pathname);
    } else {
      push(pathname + `?division=${value}`);
    }
  };

  return (
    <div className={styles.selectBox}>
      <p>Wybierz rocznik:</p>
      <SelectSearch
        id="selectSearch"
        options={options}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default SelectBox;

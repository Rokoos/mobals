import React, { Fragment } from "react";
import { getUnique } from "../../utils";
import { connect } from "react-redux";
import { setFilters } from "../../actions";
import "./filters.style.scss";

const Filters = ({
  phones: { phones, minPrice, maxPrice, price, brand, storage, memory },
  setFilters,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(name, value);
  };

  let brands = getUnique(phones, "company");
  brands = ["All", ...brands];

  brands = brands.map((item, index) => {
    return (
      <option className="label" key={index} value={item}>
        {item}
      </option>
    );
  });

  let storages = getUnique(phones, "storage");
  storages = storages.sort((a, b) => (a < b ? 1 : -1));
  storages = ["All", ...storages];
  storages = storages.map((item, index) => {
    return (
      <option className="label" key={index} value={item}>
        {item}
      </option>
    );
  });
  let RAMs = getUnique(phones, "memory");
  RAMs = RAMs.sort((a, b) => (a < b ? 1 : -1));
  RAMs = ["All", ...RAMs];
  RAMs = RAMs.map((item, index) => {
    return (
      <option className="label" key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <Fragment>
      <div className="filters">
        {/* <h2>Filters</h2> */}

        <div className="group ">
          <div className="filter-group">
            <div className="form-group">
              <label className="label" htmlFor="price">
                Price: €{price}
              </label>
              <input
                type="range"
                name="price"
                min={minPrice}
                max={maxPrice}
                id="price"
                value={price}
                onChange={handleChange}
                className="slider"
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="type">
                Brand:
              </label>
              <select
                name="brand"
                id="brand"
                value={brand}
                className="form-control"
                onChange={handleChange}
              >
                {brands}
              </select>
            </div>
          </div>
          <div className="filter-group">
            <div className="form-group">
              <label className="label" htmlFor="type">
                Storage (GB):
              </label>
              <select
                name="storage"
                id="storage"
                value={storage}
                className="form-control"
                onChange={handleChange}
              >
                {storages}
              </select>
            </div>
            <div className="form-group">
              <label className="label" htmlFor="type">
                RAM (GB):
              </label>
              <select
                name="memory"
                id="memory"
                value={memory}
                className="form-control"
                onChange={handleChange}
              >
                {RAMs}
              </select>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { setFilters })(Filters);

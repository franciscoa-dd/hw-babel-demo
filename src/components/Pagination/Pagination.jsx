/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import "./index.scss";

function Pagination({ onChange, page, totalPages = 0 }) {
  return (
    <div className="pagination-container">
      <Button onClick={() => onChange(true)} disabled={page <= 1}>
        Prev page
      </Button>
      <span>
        {page} / {totalPages}
      </span>
      <Button onClick={() => onChange(false)} disabled={page >= totalPages}>
        Next page
      </Button>
    </div>
  );
}

export default Pagination;

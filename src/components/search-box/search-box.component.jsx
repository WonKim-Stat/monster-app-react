import "/Users/wonseokkim/complete-react/monster-app-react/src/components/search-box/search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

// const SearchBox = (props) => {
//   return (
//     <div>
//       <input
//         className={`search-box ${props.className}`}
//         type="search"
//         placeholder={props.placeholder}
//         onChange={props.onChangeHandler}
//       />
//     </div>
//   );
// };

export default SearchBox;

// import styles from './Search.module.scss';

interface SearchProps {
  placeholder: string;
  value: string;
  onChange: () => void;
}

export function Search(props: SearchProps) {
    return (
        <input 
        type="text" 
        placeholder={props.placeholder}
        value={props.value}
        />
    );
};
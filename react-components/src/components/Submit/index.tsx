import './styles.scss';

const Submit = ({ isDirty }: { isDirty: boolean }) => {
  return (
    <button type="submit" className="submit" disabled={!isDirty}>
      Submit
    </button>
  );
};

export default Submit;

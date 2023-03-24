type TitleSectionProps = {
  title: string;
};
const TitleSection = ({ title }: TitleSectionProps) => {
  return <div className="mb-4 font-bold text-lg">{title}</div>;
};

export default TitleSection;

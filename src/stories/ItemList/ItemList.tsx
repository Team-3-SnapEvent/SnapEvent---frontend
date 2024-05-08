export interface Product {
  title: string;
  description?: string;
  dateRange: {
    startDate: string;
    endDate: string;
  };
  image: string;
  href: string;
}

const ItemList = ({ title, description, dateRange, image, href }: Product) => {
  return (
    // <div>
    <div className="storybook-Itemlist">
      <image href={href} />
      <h2>{title}</h2>
      {description && <div>{description}</div>}
      <span>행사 시작 날짜 : </span>
      <span>{dateRange.startDate}</span>
      <span>행사 종료 날짜 : </span>
      <span>{dateRange.endDate}</span>
      <form>
        <input name="subscribe" type="checkbox" value={"구독하기"} />
        <input name="alarm" type="checkbox" value={"알림받기"} />
      </form>
    </div>
    // </div>
  );
};

export default ItemList;

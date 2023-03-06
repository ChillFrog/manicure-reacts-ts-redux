const menuButtonStyle =
  "flex items-center justify-center w-full mx-1 text-center font-medium rounded-xl py-2 px-2 bg-indigo-50";

interface MenuItemProps {
  onClick: 
  src: string;
  alt: string;
  text: string;
}

function MenuItem({ onClick, src, alt, text }: MenuItemProps) {
  return (
    <button onClick={onClick} className={menuButtonStyle}>
      <img src={src} width={64} className="w-14" alt={alt} />
      {text}
    </button>
  );
}

export default MenuItem;

interface MenuItemProps {
  onClick?: () => void;
  src: string;
  alt: string;
  text: string;
}

function MenuItem({ onClick, src, alt, text }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="mx-1 flex w-full items-center justify-center rounded-xl bg-white bg-opacity-30 py-2 px-2 text-center font-medium"
    >
      <img src={src} width={64} className="w-14" alt={alt} />
      {text}
    </button>
  );
}

export default MenuItem;

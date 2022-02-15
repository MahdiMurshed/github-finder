const Footer = () => {
  return (
    <footer className="footer bg-gray-700 footer-center p-10">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
          />
        </svg>
        <p>Copyright &copy; 2022 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;


const Footer = () => {
  return (
  <footer class="bg-gray-900 rounded-lg shadow m-4 mt-10">
    <div class="w-full max-w-screen-xl mx-auto p-4">
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        {new Date().getFullYear()} All Rights Reserved
      </span>
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Developed with ❤ by{" "}
        <a href="https://github.com/basilmelepat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-500 from-left">
          Basil Melepat</a>
      </span>
    </div>
  </footer>
  );
};

export default Footer;
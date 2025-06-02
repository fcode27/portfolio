export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 justify-evenly min-h-[calc(100vh-64px-(var(--spacing)*28))]">     
      <div className="flex flex-1 items-center align-center justify-center">
          <h1 className="text-2xl font-heading sm:text-4xl">404</h1>
          <p className="sm:text-4xl mx-4">|</p>
          <p className="flex flex-col self-center justify-center mt-1">This page could not be found</p>
      </div>
      <div className="flex flex-1" />
    </div>
  );
}

import { Brush, LinkIcon, ListOrdered, Shield } from "lucide-react";

export const Features = () => {
  return (
    <div className="container h-screen">
      <h1 className="title">Why us!</h1>
      <div className="grid grid-cols-1 min-[450px]:grid-cols-2 gap-4 pt-6 md:grid-cols-3">
        <div className="shadow hover:shadow-lg transition ease-in-out duration-300 grid gap-3 p-4 rounded-md">
          <div className="bg-secondary w-fit p-2 rounded-sm">
            <Shield />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold">Secure</h1>
            <p className="font-medium text-gray-600">
              Toggle your links to make them private or public, securing them as
              you wish.
            </p>
          </div>
        </div>
        <div className="shadow hover:shadow-lg transition ease-in-out duration-300 grid gap-3 p-4 rounded-md">
          <div className="bg-secondary w-fit p-2 rounded-sm">
            <LinkIcon />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold">
              Unlimited Links
            </h1>
            <p className="font-medium text-gray-600">
              Create and manage an unlimited number of links with ease.
            </p>
          </div>
        </div>

        <div className="shadow hover:shadow-lg transition ease-in-out duration-300 grid gap-3 p-4 rounded-md">
          <div className="bg-secondary w-fit p-2 rounded-sm">
            <ListOrdered />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold">
              Customized Order
            </h1>
            <p className="font-medium text-gray-600">
              Arrange your links in any order you prefer, giving you full
              control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

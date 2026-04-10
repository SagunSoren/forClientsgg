import PropertyCard from "./cards/PropertyCard";

const PropertyListing = () => {
  return (
    <div>
      <div className="text-center">
        <h1>Property Listings</h1>
      </div>
      <div className="grid-cols-3 grid mx-auto max-w-7xl gap-10 p-4">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Load more
        </button>
      </div>
    </div>
  );
};
export default PropertyListing;

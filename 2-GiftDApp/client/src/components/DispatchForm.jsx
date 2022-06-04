import { Loader } from ".";
import { useContext, React } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="border-2 border-b-fuchsia-400  rounded-lg  w-full rounded-sm p-2 outline-none bg-transparent text-white  text-sm white-glassmorphism"
  />
);

function DispatchForm() {
  const { handleChange, formData, isLoading, orderForDispatch } =
    useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, drugName, temperature, destAddress } = formData;

    // Usually when you submit a form, the page reloads.
    // preventDefault() prevents this.
    e.preventDefault();

    if (!addressTo || !amount || !drugName || !temperature || !destAddress)
      return;

    // sendTransaction();

    orderForDispatch();
  };

  return (
    <div className="border-2 border-amber-900 p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
      {/* <Input placeholder="Address To"  name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH): 0.0005 ETH" name="amount" type="number" handleChange={handleChange} />
            <SimpleInput placeholder="Drug Name" name="dn" type="text"/>
            <SimpleInput placeholder="Temprature Limit (degree C)" name="tl" type="text"/>
            <SimpleInput placeholder="Quantity" name="Quantity" type="number"/>
            <SimpleInput placeholder="Delivery Address" name="da" type="text"/> */}
      {/* <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} /> */}

      <div className="mt-2 flex flex-col items-center w-full ">
        <div className="display-flex justify-start w-full mb-2">
          <div className="flex ">
            <div className="flex-initial mt-2 mr-1 w-20">
              <div className="w-full bg-[#2e3150] text-[#92b4b5] text-sm font-semibold mr-2 px-2.5 py-1 rounded">
                From
              </div>
            </div>
            <div className="text-white text-sm md:w-9/12">
              <Input
                placeholder="Address: 0xB59e.."
                name="addressTo"
                type="text"
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 flex flex-col items-center w-full ">
        <div className="display-flex justify-start w-full mb-2">
          <div className="flex ">
             <div className="flex-initial mt-2 mr-1 w-20">
              <div className="w-full bg-[#2e3150] text-[#92b4b5] text-sm font-semibold mr-2 px-2.5 py-1 rounded">
                Amount
              </div>
            </div>
            <div className=" text-white text-sm md:w-9/12">
              <Input
                placeholder="Amount (ETH)"
                name="amount"
                type="number"
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 flex flex-col items-center w-full ">
        <div className="display-flex justify-start w-full mb-2">
          <div className="flex ">
             <div className="flex-initial mt-2 mr-1 w-20">
              <div className="w-full bg-[#2e3150] text-[#92b4b5] text-sm font-semibold mr-2 px-2.5 py-1 rounded">
                Product
              </div>
            </div>
            <div className=" text-white text-sm md:w-9/12">
              <Input
                placeholder="Name of the Drug"
                name="drugName"
                type="text"
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 flex flex-col items-center w-full ">
        <div className="display-flex justify-start w-full mb-2">
          <div className="flex ">
             <div className="flex-initial mt-2 mr-1 w-20">
              <div className="w-full bg-[#2e3150] text-[#92b4b5] text-sm font-semibold mr-2 px-2.5 py-1 rounded">
                Temp °C
              </div>
            </div>
            <div className=" text-white text-sm md:w-9/12">
              <Input
                placeholder="Temperature °C"
                name="temperature"
                type="text"
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 flex flex-col items-center w-full ">
        <div className="display-flex justify-start w-full mb-2">
          <div className="flex ">
             <div className="flex-initial mt-2 mr-1 w-20">
              <div className="w-full bg-[#2e3150] text-[#92b4b5] text-sm font-semibold mr-2 px-2.5 py-1 rounded">
                Ship To
              </div>
            </div>
            <div className=" text-white text-sm md:w-9/12">
              <Input
                placeholder="Destination Address"
                name="destAddress"
                type="text"
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-400 my-2" />

      {isLoading ? (
        <Loader />
      ) : (
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
        >
          Proceed for Shipment
        </button>
      )}
    </div>
  );
}

export default DispatchForm;

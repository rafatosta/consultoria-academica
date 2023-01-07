import Title from "../components/Title";

function Payments() {
  return (
    <div>
      <Title title="Formas de pagamento" />
      <div className="p-4">
        <div className="flex flex-col justify-center items-center gap-y-4 sm:flex-row sm:gap-x-8">
          <img
            className="w-[20rem] h-60 md:w-[24rem] md:h-72 "
            src="src/assets/pagamento.png"
            alt="Image profile"
          />

          <div className="flex-col items-center justify-center">
            <p className="text-md font-bold">
              As seguintes formas de pagamento estão disponíveis:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Pix</li>
              <li>Cartão de crédito (via PicPay)</li>
              <li>Transferência ou depósito bancário</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;

import { ButtonVariantElement } from "./ButtonVariantElement";

function TestarButtonElemnte() {
  return (
    <>
      <h1>Mostrar o button</h1>
      <ButtonVariantElement variant="secondary">Cancelar</ButtonVariantElement>
      <ButtonVariantElement variant="danger" disabled>
        Apagarr
      </ButtonVariantElement>
      <ButtonVariantElement variant="primary" loading>
        Enviando
      </ButtonVariantElement>
    </>
  );
}

export default TestarButtonElemnte;

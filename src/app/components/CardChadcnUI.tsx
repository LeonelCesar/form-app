import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function CardChadcnUI() {
  return (
    <Card className="w-[600] flex flex-col gap-2 p-2">
      <CardHeader className="">
        <CardTitle className="text-sm font-light">Leonel Helder</CardTitle>
        <CardDescription className="text-sm font-light">
          Desenvolvedor Front-End
        </CardDescription>
        <CardAction className="text-sm font-light">
          Especialidade NextJs and Typscript{" "}
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Input required placeholder="Nome" />
        <Input required placeholder="E-mail" />
        <Input required placeholder="Password" />
      </CardContent>
      <CardFooter>
        <p className="text-sm font-light text-gray-400">Esse é o meu footer inprovisado</p>
      </CardFooter>
      <div className="flex items-center justify-between px-6 pt-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-sm hover:bg-blue-500">Enviar</button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-sm hover:bg-blue-500">Cancelar</button>
      </div>
    </Card>
  );
}

export default CardChadcnUI;

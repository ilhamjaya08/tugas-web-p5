import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="data:image/jpeg;base64,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"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Presiden Joko Widodo</CardTitle>
            <CardDescription>@jokowi</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Genius Studio menghadirkan aplikasi yang sangat bermanfaat bagi anak bangsa</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://th.bing.com/th/id/OIG2._oZ.w7CWIuRXRPSo6P.z?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Genius Studio</CardTitle>
          <CardDescription className="font-normal text-primary">
            Tim Developer
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/leo_mirand4"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Free
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Most popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /month</span>
          </div>

          <CardDescription>
            Game 3D Petualangan berisi edukasi sejarah, sains, matematika,dll.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Download Sekarang</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Gratis", "Edukatif", "Ramah Anak"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Kritik & Saran</CardTitle>
            <CardDescription className="text-md mt-2">
              Jika terdapat kritik & saran yang ingin anda sampaikan pada kami, silahkan kirimkan ke email kami 'admin@geniusstudio.com'
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

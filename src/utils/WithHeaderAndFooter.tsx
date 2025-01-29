import { Header } from "@/components/Header/Header";

export const WithHeaderAndFooter = (header: boolean, footer: boolean, page: any) => {
    return (
      <>
        {(header) ? <Header /> : <></>}
        {page}
        {(footer)? <>Footer Placeholder</> : <></>}
      </>
    );
  }
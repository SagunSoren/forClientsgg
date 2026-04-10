import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { items } from "@/db/FAQ";

const FAQCard = () => {
  return (
    <div>
      {/* FAQ  */}
      <div className="h-1 bg-black/10 max-w-7xl mx-auto mt-10"></div>
      <div className="flex max-lg:flex-col max-w-7xl mx-auto mt-20 mb-20">
        <p className="lg:w-1/3 max-lg:text-center text-2xl">FAQ</p>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="max-w-full mx-auto  px-6"
        >
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="text-xl">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
export default FAQCard;

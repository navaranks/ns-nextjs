import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, School, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

function ChemQuickLinks() {
  return (
    <div className='bg-[#f4f4f4] py-2 px-4 space-y-4'>
      <Card className="max-w-screen-xl w-full mx-auto">
        <CardTitle className="text-2xl font-extrabold text-center text-chem pt-2">
          Useful Handouts
        </CardTitle>
        <CardDescription className="text-center py-2">
          Here are some links that may be useful throughout the year!
        </CardDescription>
        <CardContent>
          <div className="flex justify-center">
            <Button asChild variant="outline" size="icon" className="border-none">
              <Link href={"mailto:c.navarrete@lausd.net"} className="mr-2 bg-[#3b5998] hover:bg-[#3b5998]/80">
                <Mail className="w-5 h-5" color="#3b5998" fill="white" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="border-none">
              <Link href={"https://www.youtube.com/michaelmorganchem"} className="mr-2 bg-chem hover:bg-[#DA4453]/80">
                <Youtube className="w-5 h-5" color="white" fill="#DA4453"/>
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="border-none">
              <Link href={"tel:+13232274400"} className="mr-2 bg-[#27ae60] hover:bg-[#27ae60]/80">
                <Phone className="w-5 h-5" color="#27ae60" fill="white" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="border-none">
              <Link href={"https://www.lms.lausd.net/"} className="mr-2 bg-[#656D78] hover:bg-[#656D78]/80">
                <School className="w-5 h-5" fill="#656D78" color="white"/>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ChemQuickLinks
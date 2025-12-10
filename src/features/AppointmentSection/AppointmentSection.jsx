import {
  BookAppointmentBottomBG,
  BookAppointmentTopBG,
  CalendarIcon,
} from "../../assets/exportAssets";
import OutlinedButton from "../../components/outlinedButton";
import useWindowWidth from "../../customHooks/WindowWidth";

function AppointmentSection() {
  const width = useWindowWidth();
  return (
    <section className="relative w-full pb-10 lg:pb-0" id="Appointment">
      <BookAppointmentTopBG />
      {width < 1024 ? (
        <CalendarIcon className="w-20 h-20 absolute opacity-25 right-[5%] rotate-25" />
      ) : (
        ""
      )}
      <div className="mx-auto bg-[#0F5B81] py-5 -my-1">
        <div className="w-10/12 mx-auto flex flex-col sm:flex-row items-center justify-between text-white">
          <div className="flex items-center gap-5">
            {width > 1024 ? <CalendarIcon className="w-20 h-20" /> : ""}

            <div className="grid text-left gap-2 lg:gap-0">
              <h1 className="font-[inter] font-semibold text-4xl">
                Open For Appointments
              </h1>
              <h4 className="font-[inter] font-semibold text-2xl">
                Don't Let Pain Dictate Your Life. We Can Help.
              </h4>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row py-5 gap-5 lg:gap-0 grow justify-center w-full lg:w-fit">
            <OutlinedButton text={"Book Appointment"} scrollToId={"#Contact"}/>
            <OutlinedButton text={"View Services"} scrollToId={"#Services"}/>
          </div>
        </div>
      </div>
      <BookAppointmentBottomBG />
    </section>
  );
}

export default AppointmentSection;

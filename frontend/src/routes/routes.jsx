import { element } from "prop-types";
import AddCollection from "../pages/admin/AddCollection/AddCollection";
import AddEvent from "../pages/admin/AddEvent/AddEvent";
import AddExhibition from "../pages/admin/AddExhibition/AddExhibition";
import AddShop from "../pages/admin/AddShop/AddShop";
import AdminRoot from "../pages/admin/AdminRoot";
import CollectionInfos from "../pages/admin/CollectionInfos/CollectionInfos";
import EventsInfos from "../pages/admin/EventsInfos/EventsInfos";
import ExhibitionsInfos from "../pages/admin/ExhibitionsInfos/ExhibitionsInfos";
import ShopInfos from "../pages/admin/ShopInfos/ShopInfos";
import AllEvents from "../pages/site/AllEvents/AllEvents";
import AllExhibitions from "../pages/site/AllExhibitions/AllExhibitions";
import Basket from "../pages/site/Basket/Basket";
import Collection from "../pages/site/Collection/Collection";
import EventDetail from "../pages/site/EventDetail/EventDetail";
import ExhibitionDetail from "../pages/site/ExhibitionDetail/ExhibitionDetail";
import Exhibitions from "../pages/site/Exhibitions/Exhibitions";
import FreeExhibitionDetail from "../pages/site/FreeExhibitionDetail/FreeExhibitionDetail";
import Home from "../pages/site/Home/Home";
import Shop from "../pages/site/Shop/Shop";
import ShopCategory from "../pages/site/ShopCategory/ShopCategory";
import ShopDetail from "../pages/site/ShopDetail/ShopDetail";
import SignInPage from "../pages/site/SignInPage/SignInPage";
import SignUpPage from "../pages/site/SignUpPage/SignUpPage";
import SiteRoot from "../pages/site/SiteRoot";
import User from "../pages/site/User/User";
import ShopBasket from "../pages/site/ShopBasket/ShopBasket";
import Visit from "../pages/site/Visit/Visit";
import ScrollToHead from "../components/site/ScrollToHead";
import Error from "../pages/site/Error/Error";
import AdminExDetail from "../pages/admin/AdminExDetail/AdminExDetail";
import AdminEvDetail from "../pages/admin/AdminEvDetail/AdminEvDetail";
import AdminShDetail from "../pages/admin/AdminShDetail/AdminShDetail";
import ContactUs from "../pages/site/ContactUs/ContactUs";

const ROUTES = [
    {
        path: "/",
        element: <ScrollToHead><SiteRoot /></ScrollToHead>,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "exhibitions-events",
                element: <Exhibitions />
            },
            {
                path: "shop",
                element: <Shop />
            },
            {
                path: "exhibition-details/:id",
                element: <ExhibitionDetail />
            },
            {
                path: "free-exhibition-details/:id",
                element: <FreeExhibitionDetail />
            },
            {
                path: "event-details/:id",
                element: <EventDetail />
            },
            {
                path: "shop-category/:category",
                element: <ShopCategory />
            },
            {
                path: "collection",
                element: <Collection />
            },
            {
                path: "basket",
                element: <Basket />
            },
            {
                path: "shop-details/:id",
                element: <ShopDetail />
            },
            {
                path: "all-exhibitions",
                element: <AllExhibitions />
            },
            {
                path: "all-events",
                element: <AllEvents />
            },
            {
                path: "sign-up",
                element: <SignUpPage />
            },
            {
                path: "sign-in",
                element: <SignInPage />
            },
            {
                path: "user",
                element: <User />
            },
            {
                path: "shop-cart",
                element: <ShopBasket />
            },
            {
                path: "visit",
                element: <Visit />
            },
            {
                path: "*",
                element: <Error />
            },
            {
                path: "contact-us",
                element: <ContactUs />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminRoot />,
        children: [
            {
                path: "add-exhibition",
                element: <AddExhibition />
            },
            {
                path: "add-event",
                element: <AddEvent />
            },
            {
                path: "add-collection",
                element: <AddCollection />
            },
            {
                path: "add-shop",
                element: <AddShop />
            },
            {
                path: "exhibitions-infos",
                element: <ExhibitionsInfos />
            },
            {
                path: "events-infos",
                element: <EventsInfos />
            },
            {
                path: "collection-infos",
                element: <CollectionInfos />
            },
            {
                path: "shop-infos",
                element: <ShopInfos />
            },
            {
                path: "admin-exhibitions-details/:id",
                element: <AdminExDetail />
            },
            {
                path: "admin-events-details/:id",
                element: <AdminEvDetail />
            },
            {
                path: "admin-shop-details/:id",
                element: <AdminShDetail />
            }
        ]
    }
]

export default ROUTES
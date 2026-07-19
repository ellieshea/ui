"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faCog,
  faBell,
  faSearch,
  faUser,
  faFire,
  faHeart,
  faCheckCircle,
  faClock,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export function FontAwesomeIconsDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Solid Icons</h3>
        <div className="flex gap-4">
          <FontAwesomeIcon icon={faHome} className="h-6 w-6" />
          <FontAwesomeIcon icon={faCog} className="h-6 w-6" />
          <FontAwesomeIcon icon={faBell} className="h-6 w-6" />
          <FontAwesomeIcon icon={faSearch} className="h-6 w-6" />
          <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Colored Icons</h3>
        <div className="flex gap-4">
          <FontAwesomeIcon icon={faFire} className="h-6 w-6 text-red-500" />
          <FontAwesomeIcon icon={faHeart} className="h-6 w-6 text-pink-500" />
          <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 text-green-500" />
          <FontAwesomeIcon icon={faClock} className="h-6 w-6 text-yellow-500" />
          <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6 text-blue-500" />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Brand Icons</h3>
        <div className="flex gap-4">
          <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
          <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
          <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Size Variants</h3>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faHome} className="h-4 w-4" />
          <FontAwesomeIcon icon={faHome} className="h-6 w-6" />
          <FontAwesomeIcon icon={faHome} className="h-8 w-8" />
          <FontAwesomeIcon icon={faHome} className="h-10 w-10" />
        </div>
      </div>
    </div>
  )
}

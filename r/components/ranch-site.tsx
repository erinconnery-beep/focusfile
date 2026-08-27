import Image from 'next/image'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'

const asset = '/ranch/smith-river-ranch-design-lab/assets/'

const facts = [
  ['21,497±', 'Deeded acres'],
  ['15+ mi', 'River & streams'],
  ['500+', 'Resident elk'],
  ['100,000+', 'Sq ft improvements'],
]

const gallery = [
  ['gallery-final-sr1.jpg', 'The Smith River carving through open meadow'],
  ['gallery-final-sr3.jpg', 'Ranch country rising toward the mountains'],
  ['gallery-final-sr7.jpg', 'A quiet bend in the river'],
  ['gallery-elk-mountain-meadow.jpg', 'Resident elk in a mountain meadow'],
  ['gallery-final-sr12.jpg', 'Late light across Smith River Ranch'],
]

function Mark() {
  return (
    <a href="#top" className="font-serif text-xl tracking-tight" aria-label="Smith River Ranch, return to top">
      SRR
    </a>
  )
}

function ChapterHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="chapter-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-balance font-serif text-5xl leading-none md:text-7xl">{title}</h2>
      <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">{copy}</p>
    </div>
  )
}

function FullBleedChapter({ image, alt, title, subtitle }: { image: string; alt: string; title: string; subtitle: string }) {
  return (
    <section className="photo-chapter">
      <Image src={`${asset}${image}`} alt={alt} fill sizes="100vw" className="object-cover" />
      <div className="photo-shade" />
      <div className="photo-caption">
        <h2 className="text-balance font-serif text-5xl leading-none md:text-7xl">{title}</h2>
        <p className="mt-4 max-w-xl font-serif text-xl italic md:text-2xl">{subtitle}</p>
      </div>
    </section>
  )
}

export function RanchSite() {
  return (
    <main id="top">
      <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-6 text-primary-foreground md:px-10">
        <Mark />
        <nav aria-label="Primary navigation" className="flex items-center gap-6 text-xs uppercase tracking-[0.18em]">
          <a href="#property" className="hidden md:block">Property</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact" className="border-b border-current pb-1">Inquire</a>
        </nav>
      </header>

      <section className="hero-section">
        <Image src={`${asset}srr-hero.jpg`} alt="Aerial view of the Smith River curving through the ranch" fill priority sizes="100vw" className="object-cover" />
        <div className="photo-shade" />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-primary-foreground">
          <p className="mb-5 text-xs uppercase tracking-[0.28em]">White Sulphur Springs · Montana</p>
          <h1 className="max-w-5xl text-balance font-serif text-6xl leading-[0.88] md:text-8xl lg:text-9xl">Smith River Ranch</h1>
          <p className="mt-6 font-serif text-2xl italic md:text-3xl">A masterpiece of the American West</p>
        </div>
        <a href="#property" aria-label="Discover the property" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.24em] text-primary-foreground">
          Discover <ArrowDown aria-hidden="true" />
        </a>
      </section>

      <section id="property" className="bg-primary text-primary-foreground">
        <div className="content-shell py-20 md:py-28">
          <p className="eyebrow text-primary-foreground/60">Private offering · Smith River</p>
          <h2 className="max-w-5xl text-balance font-serif text-4xl leading-tight md:text-6xl">A complete private landscape, ready for the family who wants the West without compromise.</h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl">A legacy Montana holding where exceptional water, abundant wildlife and turnkey ranch infrastructure come together at extraordinary scale.</p>
          <dl className="mt-16 grid border-y border-primary-foreground/20 md:grid-cols-4">
            {facts.map(([value, label]) => <div key={label} className="flex flex-col gap-2 border-primary-foreground/20 py-7 md:border-r md:px-6 first:pl-0 last:border-r-0"><dt className="order-2 text-xs uppercase tracking-[0.18em] text-primary-foreground/55">{label}</dt><dd className="font-serif text-3xl">{value}</dd></div>)}
          </dl>
        </div>
      </section>

      <FullBleedChapter image="rolling-hills.jpg" alt="Rolling hills and broad green valleys at Smith River Ranch" title="The Land" subtitle="A private world measured in horizons" />

      <section className="paper-section">
        <div className="content-shell py-20 md:py-28">
          <ChapterHeading eyebrow="One contiguous ownership" title="Spanning over ten miles" copy="The ranch rises from the irrigated valley through river canyons and across mountain meadows to timbered high country, all held within a single ownership." />
          <div className="map-frame mt-12"><Image src={`${asset}boundary-map-cropped.jpg`} alt="Aerial boundary map of Smith River Ranch" width={1800} height={1100} className="h-auto w-full" /></div>
          <div className="mt-5 flex flex-col justify-between gap-3 text-sm text-muted-foreground md:flex-row"><p>The Smith River and its tributaries thread through one contiguous private ownership.</p><p>21,497± deeded acres · No state, BLM, or leased lands</p></div>
        </div>
      </section>

      <FullBleedChapter image="bozeman-main-street.jpg" alt="Colorful storefronts in downtown Bozeman, Montana" title="Location & Access" subtitle="For all its wild beauty, the ranch is remarkably easy to reach" />

      <section className="paper-section">
        <div className="content-shell py-20 md:py-28">
          <ChapterHeading eyebrow="Arrival" title="A world apart, within reach" copy="Smith River Ranch lies north of White Sulphur Springs, with Bozeman serving as both the primary gateway and a destination in its own right." />
          <div className="map-frame mt-12"><Image src={`${asset}location-map-final-v2.jpg`} alt="Map locating Smith River Ranch relative to Bozeman and White Sulphur Springs" width={1500} height={1700} className="h-auto w-full" /></div>
          <dl className="mt-10 grid border-y border-border md:grid-cols-3">
            {[['Helicopter','25± minutes from Bozeman Yellowstone International Airport to the ranch helipad'],['Private Aircraft','White Sulphur Springs Airport · 6,100 ft paved runway · 30± minutes to the ranch'],['By Road','Just under two hours from Bozeman']].map(([term, desc]) => <div key={term} className="border-border py-7 md:border-r md:px-7 first:pl-0 last:border-r-0"><dt className="font-serif text-2xl">{term}</dt><dd className="mt-3 leading-relaxed text-muted-foreground">{desc}</dd></div>)}
          </dl>
        </div>
      </section>

      <FullBleedChapter image="sheep-creek-sr5.jpg" alt="Sheep Creek winding through green meadow" title="Water Resources" subtitle="Nearly seven miles of Sheep Creek flow through the ranch" />

      <section className="bg-primary text-primary-foreground">
        <div className="content-shell grid gap-14 py-20 md:grid-cols-[1fr_1.3fr] md:py-28">
          <h2 className="text-balance font-serif text-5xl leading-none md:text-7xl">Beauty at every bend.</h2>
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-primary-foreground/75"><p>Wild and dramatic, the Smith River is Montana&apos;s only permit-protected river.</p><p>The Smith flows through the ranch for six miles, creating a rare float and fishing experience entirely within the property.</p><p>Extensive water rights convey with the ranch.</p></div>
        </div>
      </section>

      <section id="gallery" className="paper-section py-20 md:py-28">
        <div className="content-shell"><ChapterHeading eyebrow="The ranch in pictures" title="An uninterrupted landscape" copy="River, meadow, limestone canyon and timbered high country—the character of the ranch changes with every mile." /></div>
        <div className="gallery-grid mt-14">
          {gallery.map(([image, alt], index) => <figure key={image} className={index === 0 || index === 3 ? 'gallery-wide' : ''}><Image src={`${asset}${image}`} alt={alt} width={1800} height={1200} className="h-full w-full object-cover" /></figure>)}
        </div>
      </section>

      <FullBleedChapter image="elk-bull-portrait.jpg" alt="A trophy bull elk at Smith River Ranch" title="Elk & Wildlife" subtitle="A landscape large enough to hold the rhythms of the wild" />
      <FullBleedChapter image="recreation-horses-field.jpg" alt="Horses grazing in a mountain meadow" title="Equestrian & Recreation" subtitle="A private outdoor world for every generation" />
      <FullBleedChapter image="hospitality-lodge-setting.jpg" alt="The lodge compound in the ranch landscape" title="Lodge & Guest Experience" subtitle="Room for family, friends and the traditions that bring them back" />

      <section className="paper-section" aria-labelledby="facts-title">
        <div className="content-shell py-20 md:py-28">
          <p className="eyebrow">Property facts</p><h2 id="facts-title" className="font-serif text-5xl md:text-7xl">A fully operating legacy</h2>
          <dl className="facts-grid mt-14">
            {[['Acreage','21,497± contiguous deeded acres'],['Water rights','93 appurtenant · 14 irrigation'],['Live water','6± miles Smith River · 6.75± miles Sheep Creek'],['Irrigated land','600+ acres'],['Structures','100,000+ sq ft of improvements'],['Residences','Owner’s residence, lodge, six guest cabins and staff housing'],['Operations','Agricultural compound and 9,576 sq ft operations building'],['Location','North of White Sulphur Springs, Montana']].map(([term, desc]) => <div key={term} className="fact-row"><dt>{term}</dt><dd>{desc}</dd></div>)}
          </dl>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <Image src={`${asset}gallery-final-sr10.jpg`} alt="The Smith River winding through the ranch at dusk" fill sizes="100vw" className="object-cover" />
        <div className="photo-shade" />
        <div className="relative content-shell flex min-h-[80vh] flex-col justify-center py-24 text-primary-foreground">
          <p className="eyebrow text-primary-foreground/60">Offered privately by Connery & Co.</p>
          <h2 className="max-w-4xl text-balance font-serif text-6xl leading-none md:text-8xl">Step into a fully operating legacy.</h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">Smith River Ranch can be conveyed substantially furnished and equipped, including the cattle herd, allowing the next owner to immediately enjoy a complete ranch experience.</p>
          <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:gap-10">
            <a href="mailto:bryce@connery.co" className="inline-flex w-fit items-center gap-3 border border-primary-foreground/50 px-6 py-4 text-sm uppercase tracking-[0.18em]">Request particulars <ArrowUpRight aria-hidden="true" /></a>
            <div><p className="font-serif text-2xl">Bryce Connery</p><p className="mt-1 text-sm text-primary-foreground/65">406.599.9158 · bryce@connery.co</p></div>
          </div>
          <div className="mt-20 flex items-center gap-2 text-sm text-primary-foreground/60"><MapPin aria-hidden="true" />233 E Main St · Bozeman, Montana</div>
        </div>
      </section>
      <footer className="bg-primary px-5 py-8 text-xs leading-relaxed text-primary-foreground/45 md:px-10">Confidential. Prepared for prospective buyer review. Not for distribution. Information is deemed reliable but is not guaranteed.</footer>
    </main>
  )
}

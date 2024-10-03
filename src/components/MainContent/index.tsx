interface MainContent {
  id: string;
}

/**
 * The content for our app. This causes the content to be displayed with a scrollbar.
 * @component AppContent
 */
export function MainContent({ id }: MainContent) {
  return (
    <div
      style={{
        display: "block",
        fontSize: "1.25rem",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "1rem",
        position: "relative",
        top: "100px",
        width: "100%",
      }}
    >
      <main className="main-content" id={id}>
        <h1 style={{ marginBottom: "3rem" }}>Welcome to My Website</h1>
        <p style={{ marginBottom: "3rem" }}>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor
          vestibulum adipiscing iaculis erat tempor cras. Vulputate ligula
          fermentum blandit nibh lectus felis morbi maecenas. Eget eleifend nisi
          libero mollis porttitor sodales risus. Imperdiet suspendisse blandit
          commodo blandit odio. Hendrerit phasellus montes eleifend lobortis
          luctus eu ornare orci. Aliquet non odio placerat vitae sapien cras
          inceptos habitant.
        </p>
        <p style={{ marginBottom: "3rem" }}>
          Hendrerit molestie quis molestie vulputate magna; dignissim nunc fames
          ad. Aliquet urna dapibus morbi habitant nisi; felis netus. Aptent
          maximus magnis, sagittis natoque facilisis sodales. Tincidunt a
          ultrices ut facilisis non posuere laoreet aenean. Auctor fermentum
          dolor egestas curae dui blandit habitant gravida. Condimentum
          tincidunt eu fermentum commodo habitasse dictumst. Nulla porttitor
          pretium leo nam dis ut.
        </p>
        <p style={{ marginBottom: "3rem" }}>
          Vestibulum parturient pellentesque ex conubia libero. Pretium
          fermentum nibh curabitur placerat tempus non facilisis. Euismod ipsum
          odio sagittis nascetur diam. Ridiculus per auctor ac duis turpis eros
          mus nec libero. Est rhoncus molestie venenatis in gravida ipsum
          platea. Habitasse tincidunt phasellus platea eget sociosqu sodales
          sociosqu nibh. Faucibus lacus pharetra orci condimentum amet ornare
          dui maecenas.
        </p>
        <p style={{ marginBottom: "3rem" }}>
          Litora cras sem gravida sit nisl facilisis vulputate. Varius amet
          elementum mollis; erat lacinia nisl? Suscipit cras pretium arcu purus
          pharetra bibendum urna bibendum faucibus. Id inceptos mattis tempor
          est accumsan consequat interdum vulputate. Suscipit senectus hac
          blandit elit finibus parturient arcu dolor. Placerat phasellus egestas
          nulla malesuada morbi mus curae. Imperdiet non fermentum sed per
          senectus, aenean dui justo. Vitae odio sapien ultrices suspendisse
          enim, lacus commodo. Sociosqu eros bibendum at porta hendrerit arcu
          diam integer potenti.
        </p>
        <p style={{ marginBottom: "3rem" }}>
          Integer iaculis pharetra, neque aliquam lectus pretium ac primis.
          Penatibus facilisi dolor libero conubia sem tempor felis ex nec.
          Porttitor velit mattis morbi nascetur gravida commodo libero odio
          ipsum. Ullamcorper curae cras dapibus cursus ligula. Sodales
          scelerisque ultricies justo suspendisse habitasse velit. Mi id donec
          egestas mauris; eleifend taciti montes consectetur. Iaculis aliquam
          porta metus netus etiam ex ante. Rutrum hac molestie eu feugiat
          aliquet molestie mauris eu lorem.
        </p>
        <p style={{ marginBottom: "3rem" }}>
          Consectetur natoque metus taciti in sodales inceptos velit volutpat.
          At aptent sed aenean posuere ullamcorper. Consectetur dis accumsan
          egestas ut neque nascetur torquent iaculis. Sollicitudin parturient
          aliquet ultricies adipiscing inceptos at hac tristique. Lacinia nec
          feugiat elementum litora praesent ultricies. Maximus nullam ex egestas
          dui habitasse. Nullam cras neque condimentum nam nisi ullamcorper
          orci.
        </p>
        <p style={{ marginBottom: "3rem" }}>
          Dui dis ante; vitae bibendum malesuada vivamus. Imperdiet lectus
          ornare maecenas metus nullam dignissim. Amet justo quam habitasse
          habitant per egestas phasellus suspendisse. Bibendum mauris nascetur
          parturient faucibus massa. Magnis ante vivamus justo natoque quisque
          neque proin himenaeos. Natoque a sagittis massa vehicula vel turpis
          nullam ornare. Dis convallis ligula porta neque at mauris blandit
          consequat.
        </p>
        <p style={{ marginBottom: "3rem" }}>
          Suspendisse mollis malesuada montes tristique fringilla laoreet
          curabitur varius. Quis natoque primis sit placerat ullamcorper nostra
          magnis torquent. Per euismod sollicitudin ipsum convallis viverra
          faucibus litora etiam. Himenaeos natoque convallis eu accumsan dapibus
          ridiculus metus. Finibus fames malesuada sociosqu sem ad amet
          elementum curae ac. Metus aenean gravida aliquam diam commodo sagittis
          semper diam ut. Torquent dignissim euismod nunc sociosqu, viverra
          mollis.
        </p>
        <p style={{ marginBottom: "3rem" }}>
          Metus augue sapien, accumsan auctor per laoreet. Phasellus hendrerit
          duis scelerisque nostra placerat turpis dictum sit. Commodo ornare
          bibendum ante viverra ornare at. Suscipit praesent dui cursus finibus
          augue. Eget pellentesque vivamus accumsan ultricies mattis ullamcorper
          pulvinar. Facilisis maximus facilisis elementum mauris cursus feugiat
          molestie. Habitasse egestas sed augue tincidunt vestibulum. Dictum
          feugiat etiam fringilla in donec sed vitae. Interdum dis cras eleifend
          aptent ac fringilla nunc.
        </p>
        <p style={{ marginBottom: "3rem" }}>
          Per nibh luctus laoreet mattis, in accumsan urna ultricies ornare. Et
          leo suspendisse; mi in rutrum eu taciti. Mi suspendisse ipsum
          fringilla, ac condimentum feugiat porta. Faucibus urna ligula interdum
          facilisi tempus tempus. Dictum ultricies etiam eu consequat potenti
          habitant inceptos. Suspendisse viverra platea varius ante id potenti
          vel urna. Ultrices mattis viverra phasellus venenatis fringilla class.
        </p>
      </main>
    </div>
  );
}

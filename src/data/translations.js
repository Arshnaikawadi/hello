export const translations = {
  en: {
    // Navigation
    nav: {
      brandName: "SolarSaathi",
      brandTagline: "Solar Energy Guide for Farmers",
      home: "Home",
      solarEnergy: "Solar Energy",
      solarPanels: "Solar Panels",
      solarPump: "Solar Pump",
      uses: "Uses of Solar",
      benefits: "Benefits",
      schemes: "Schemes",
      calculator: "Calculator",
      maintenance: "Maintenance",
      whySolar: "Why Solar?",
      contact: "Contact",
      language: "मराठी",
      collegeProjectBadge: "College Mini Project",
    },

    // Hero Section
    hero: {
      heading: "Solar Energy for a Better Farming Future",
      subheading:
        "Learn how solar energy can help farmers with irrigation, farm activities and clean energy solutions.",
      exploreBtn: "Explore Solar Energy",
      calculatorBtn: "Try Solar Calculator",
      badge1: "Clean Green Energy",
      badge2: "For Indian Agriculture",
      badge3: "Smart Farming",
      farmerCaption: "Shri Santosh Patil, Farmer from Maharashtra with his solar-powered irrigation setup",
      solarFeature1Title: "Daytime Irrigation",
      solarFeature1Desc: "No more midnight watering schedules",
      solarFeature2Title: "Zero Fuel Cost",
      solarFeature2Desc: "Powered by natural free sunlight",
      solarFeature3Title: "Reliable Water",
      solarFeature3Desc: "Consistent pressure for crops",
    },

    // Quick Feature Cards (7 cards)
    quickFeatures: {
      title: "Explore Solar Guide Topics",
      subtitle: "Click any feature below to navigate directly to the educational guide section.",
      cards: [
        {
          id: "solar-energy",
          title: "Solar Energy",
          desc: "Learn the basics of solar energy.",
          icon: "Sun",
          btnText: "Learn More",
        },
        {
          id: "solar-panels",
          title: "Solar Panels",
          desc: "Understand how solar panels work.",
          icon: "Zap",
          btnText: "Learn More",
        },
        {
          id: "solar-pump",
          title: "Solar Pump",
          desc: "Learn about solar water pumps for irrigation.",
          icon: "Droplets",
          btnText: "Learn More",
        },
        {
          id: "benefits",
          title: "Benefits",
          desc: "Understand the benefits for farmers.",
          icon: "TrendingUp",
          btnText: "Learn More",
        },
        {
          id: "schemes",
          title: "Government Schemes",
          desc: "Learn about available government support.",
          icon: "ShieldCheck",
          btnText: "Learn More",
        },
        {
          id: "calculator",
          title: "Solar Calculator",
          desc: "Estimate basic solar requirements.",
          icon: "Calculator",
          btnText: "Try Calculator",
        },
        {
          id: "maintenance",
          title: "Maintenance",
          desc: "Learn simple solar system maintenance.",
          icon: "Wrench",
          btnText: "Learn More",
        },
      ],
    },

    // Solar Energy Section
    solarEnergy: {
      badge: "Section 01",
      title: "What is Solar Energy?",
      definition:
        "Solar energy is energy obtained from sunlight. Solar panels convert sunlight into electrical energy that can be used for different agricultural activities.",
      whyUsefulTitle: "Why is Solar Energy Useful for Farmers?",
      whyUsefulText:
        "In agriculture, energy is needed daily for pumping water, operating machinery, and lighting farm premises. Solar energy is completely self-reliant, meaning farmers do not have to wait for late-night grid electricity schedules or spend recurring money on diesel generators.",
      renewableTitle: "Renewable Energy Concept",
      renewableText:
        "Unlike coal, petroleum, or diesel which run out and cause pollution, sunlight is a renewable natural resource. It replenishes itself every single morning and produces zero emissions or toxic pollutants.",
      agriImportanceTitle: "Importance in Agriculture",
      agriImportanceText:
        "India enjoys more than 300 sunny days each year. Harnessing this solar radiation allows farmers to secure uninterrupted water for crop growth, lower farm operating expenses, and promote environmental sustainability.",
      diagramTitle: "Solar Energy Flow Diagram",
      diagramSubtitle: "The simple pathway from sunshine to farm utility",
      steps: [
        { label: "Sunlight", desc: "Natural radiant light from the sun", icon: "Sun" },
        { label: "Solar Panel", desc: "Absorbs light photons via silicon cells", icon: "Grid" },
        { label: "Electricity", desc: "Converts light into clean electrical power", icon: "Zap" },
        { label: "Farm Use", desc: "Runs irrigation pumps, lights, and tools", icon: "Tractor" },
      ],
    },

    // Solar Panel Section
    solarPanel: {
      badge: "Section 02",
      title: "What is a Solar Panel?",
      intro:
        "A solar panel is a device that collects sunlight and converts it into electricity. It is constructed from a network of small units called photovoltaic (PV) cells.",
      pvCellsTitle: "Photovoltaic Cells in Simple Language",
      pvCellsText:
        "Photovoltaic cells are wafer-thin semiconductor layers made primarily of specially treated silicon. When sunlight rays hit these silicon cells, light particles (photons) knock loose electrons inside the material. This flow of electrons creates direct electrical current (DC electricity).",
      diagramBanner: "Sunlight → Photovoltaic Cells → Electrical Energy",
      elecGenTitle: "Electricity Generation Process",
      elecGenText:
        "The generated Direct Current (DC) travels through insulated cables into a solar controller or inverter. The controller regulates voltage, ensuring safe and stable power delivery to agricultural pumps and farm appliances.",
      componentsTitle: "Basic System Components:",
      components: [
        {
          name: "Toughened Protective Glass",
          desc: "Heavy-duty anti-reflective glass that protects delicate silicon cells from heavy rain, wind, dust, and hail.",
        },
        {
          name: "Photovoltaic (PV) Cells",
          desc: "The heart of the panel: crystalline silicon cells where the physical conversion of light into electricity takes place.",
        },
        {
          name: "Anodized Aluminum Frame",
          desc: "Corrosion-resistant metal frame that provides mechanical strength and secure mounting in open farm fields.",
        },
        {
          name: "Backsheet & Junction Box",
          desc: "Weatherproof backing seal and output junction box with cables that safely transfer DC electrical power.",
        },
      ],
      diagramCaption: "Labeled Cross-Section Diagram of an Agricultural Solar Panel Module",
    },

    // Solar Water Pump Section
    solarPump: {
      badge: "Section 03",
      title: "Solar Water Pump for Irrigation",
      intro:
        "A solar water pump is an irrigation pump powered entirely by solar electricity generated from solar panels. It lifts water from borewells, open wells, canals, or farm ponds to irrigate crops without requiring grid electricity or diesel fuel.",
      flowDiagramTitle: "Solar Pump Working Diagram",
      flowSteps: [
        { name: "Sunlight", desc: "Radiant solar energy in open fields" },
        { name: "Solar Panels", desc: "Converts sunshine into DC electricity" },
        { name: "Controller", desc: "Regulates voltage, current & pump speed" },
        { name: "Solar Pump", desc: "Lifts water smoothly from source" },
        { name: "Water", desc: "Flows through delivery pipes" },
        { name: "Farm", desc: "Irrigates crops through drip/sprinklers" },
      ],
      mainComponentsTitle: "Main Components of a Solar Pump System:",
      componentsList: [
        {
          name: "Solar Panel",
          desc: "An array of photovoltaic panels tilted towards the sun to harvest maximum sunlight throughout the day.",
          icon: "Sun",
        },
        {
          name: "Controller",
          desc: "The electronic brain that manages power delivery, safeguards the motor against dry run, and maximizes water flow.",
          icon: "Sliders",
        },
        {
          name: "Pump",
          desc: "High-efficiency submersible or surface pump motor engineered to operate reliably under fluctuating solar power.",
          icon: "Droplet",
        },
        {
          name: "Pipes",
          desc: "Durable delivery and suction piping (HDPE or PVC) transporting pressurized water to agricultural fields.",
          icon: "Pipette",
        },
        {
          name: "Water Storage",
          desc: "Overhead farm tanks, plastic-lined ponds, or open reservoirs to store pumped water for gravity-fed irrigation.",
          icon: "Waves",
        },
      ],
      pumpTypesTitle: "Two Primary Pump Categories for Farmers:",
      submersibleTitle: "Submersible Solar Pump",
      submersibleDesc:
        "Designed to be lowered deep inside borewells or deep dug wells. The entire motor and pump unit operates submerged beneath the water table, making it ideal for deep groundwater irrigation.",
      surfaceTitle: "Surface Solar Pump",
      surfaceDesc:
        "Installed on dry land adjacent to an open well, farm pond, river, or irrigation canal. It draws water through a suction pipe, ideal where the water level is within 7 to 10 meters of ground level.",
    },

    // Uses of Solar Energy (6 cards)
    uses: {
      badge: "Section 04",
      title: "Uses of Solar Energy in Agriculture",
      subtitle: "Discover how solar energy supports a wide variety of daily agricultural tasks",
      cards: [
        {
          title: "Water pumping",
          desc: "Drawing groundwater from deep borewells and open wells to meet crop water needs reliably.",
          icon: "Droplet",
        },
        {
          title: "Irrigation",
          desc: "Pressurizing modern drip irrigation and sprinkler systems for optimal, water-saving crop hydration.",
          icon: "Waves",
        },
        {
          title: "Farm lighting",
          desc: "Illuminating cattle sheds, tool barns, security fences, and farmhouse compounds safely at night.",
          icon: "Lightbulb",
        },
        {
          title: "Battery charging",
          desc: "Recharging electric farm sprayers, tractor batteries, inverters, and handheld agricultural tools.",
          icon: "BatteryCharging",
        },
        {
          title: "Small agricultural equipment",
          desc: "Operating chaff cutters, flour mills, seed sorters, and winnowing fans using solar motors.",
          icon: "Cog",
        },
        {
          title: "Farm-related electrical devices",
          desc: "Powering electric insect traps, soil moisture sensors, milk chillers, and automated fencing.",
          icon: "Zap",
        },
      ],
    },

    // Benefits for Farmers (6 exact items, no unsupported statistics)
    benefits: {
      badge: "Section 05",
      title: "Benefits of Solar Energy for Farmers",
      subtitle: "Verified advantages that make solar adoption valuable for rural livelihoods",
      list: [
        {
          title: "Renewable source of energy",
          desc: "Solar energy is naturally replenished every day. Farmers have access to an abundant, non-depleting source of power that will never run out.",
          icon: "Sun",
        },
        {
          title: "Reduces dependence on conventional electricity",
          desc: "Frees farmers from unpredictable grid load-shedding, sudden voltage drops, and having to irrigate crops in dangerous midnight conditions.",
          icon: "ZapOff",
        },
        {
          title: "Useful for irrigation",
          desc: "Matches water pumping directly with the sunniest hours of the day when crops and soil benefit most from timely irrigation cycles.",
          icon: "Droplets",
        },
        {
          title: "Environment-friendly",
          desc: "Generates zero exhaust fumes, greenhouse gases, or noise, preserving soil quality and creating a clean farm environment.",
          icon: "Sprout",
        },
        {
          title: "Low operating requirements",
          desc: "Solar panel systems have no moving mechanical parts, requiring minimal day-to-day operation other than simple periodic cleaning.",
          icon: "Wrench",
        },
        {
          title: "Useful in areas with good sunlight",
          desc: "Indian farming regions receive ample tropical sunshine, making solar installations highly suitable across diverse agricultural zones.",
          icon: "MapPin",
        },
      ],
    },

    // Solar Requirement Calculator
    calculator: {
      badge: "Section 06",
      title: "Solar Requirement Calculator",
      subtitle: "Estimate basic solar requirements and pump sizing for educational understanding",
      landSizeLabel: "1. Land Size (in Acres)",
      landSizePlaceholder: "e.g., 3.0",
      waterLabel: "2. Daily Water Requirement (in Liters)",
      waterPlaceholder: "e.g., 15000",
      presetSmall: "5,000 L (Small Plot)",
      presetMedium: "15,000 L (Medium Farm)",
      presetLarge: "30,000 L (Large Holding)",
      hoursLabel: "3. Pump Usage Hours (per Day)",
      powerLabel: "4. Pump Power (Optional, in HP)",
      powerPlaceholder: "e.g., 3 or 5",
      calculateBtn: "Calculate",
      resetBtn: "Reset",
      resultHeading: "Basic Educational Estimate",
      resultSolarReq: "Estimated Solar Requirement",
      resultSystemCat: "Suggested System Category",
      resultRecTitle: "Basic Recommendation",
      disclaimerNote:
        "“This calculator provides a basic educational estimate. Actual system sizing should be confirmed by a qualified solar professional.”",
      recTextTemplate:
        "Based on your farm size of {land} acres and daily water requirement of {water} liters, a system with approximately {kwp} kWp solar capacity paired with a {hp} HP pump is generally recommended for daytime farm irrigation.",
    },

    // Government Schemes Section
    schemes: {
      badge: "Section 07",
      title: "Government Schemes & Support",
      subtitle: "Learn about public initiatives supporting solar agricultural systems in India",
      intro:
        "Central and State Government programs support farmers in adopting solar technology to increase agricultural productivity, improve irrigation access, and modernize rural infrastructure.",
      pmKusumTitle: "PM-KUSUM Scheme Overview",
      pmKusumDesc:
        "The Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM) is a premier national initiative led by the Ministry of New and Renewable Energy (MNRE). It consists of three structured components:",
      compA: "Component A: Setting up small solar power plants on barren or fallow agricultural lands.",
      compB: "Component B: Installation of standalone off-grid solar water pumps for individual farmers.",
      compC: "Component C: Solarisation of existing grid-connected agricultural pumps.",
      eligibilityTitle: "General Eligibility Information:",
      eligibilityPoints: [
        "Individual farmers, groups of farmers, Water User Associations (WUAs), and Farmer Producer Organizations (FPOs).",
        "Farmers who possess clear land title deeds or registered lease agreements for agricultural land.",
        "Farmers who possess a functional water source such as an open well, borewell, or farm pond.",
        "Applicants who do not already have an electrified pump on the same parcel of land (for Component B standalone pumps).",
      ],
      applicationGuidanceTitle: "Application Guidance for Farmers:",
      applicationSteps: [
        {
          step: "1. Online Registration",
          desc: "Register through your State Renewable Energy Development Agency portal (e.g., MEDA in Maharashtra) or the official PM-KUSUM portal.",
        },
        {
          step: "2. Document Submission",
          desc: "Provide standard verification documents including Aadhaar Card, 7/12 extract / land documents, bank passbook, and water source proof.",
        },
        {
          step: "3. Site Survey",
          desc: "Official agency representatives or empanelled vendors survey the well depth and farm location to verify system feasibility.",
        },
        {
          step: "4. Installation & Commissioning",
          desc: "Approved empanelled solar contractors install the solar panels, controller, and pump with formal inspection and testing.",
        },
      ],
      officialNoticeText:
        "“Scheme details, eligibility and subsidy amounts may change. Farmers should verify current information through official government sources.”",
      officialBtn: "Check Official Information",
    },

    // Maintenance Section (5 items)
    maintenance: {
      badge: "Section 08",
      title: "Simple Solar System Maintenance Guide",
      subtitle: "Practical tips to ensure long service life and high energy yield from your solar installation",
      steps: [
        {
          title: "Panel Cleaning",
          desc: "Keep panels free from dust and dirt. Wash the glass surface with clean water and a soft cloth once a week, preferably in the early morning or evening when panels are cool.",
          icon: "Sparkles",
        },
        {
          title: "Wiring Check",
          desc: "Inspect visible wires and connections. Look for loose cables, damaged insulation, or signs of rodent biting. Ensure electrical earth grounding is intact.",
          icon: "Eye",
        },
        {
          title: "Pump Inspection",
          desc: "Check the pump regularly. Ensure suction pipes are not clogged with sand or mud, and listen for smooth, vibration-free motor operation during water pumping.",
          icon: "Activity",
        },
        {
          title: "System Check",
          desc: "Monitor the system for unusual performance. Observe the solar controller display for indicator lights or error messages, and note any sudden reduction in water discharge.",
          icon: "ShieldAlert",
        },
        {
          title: "Professional Service",
          desc: "Contact a qualified technician when required. For internal electrical faults, inverter errors, or motor servicing, always seek trained professional support rather than opening components yourself.",
          icon: "PhoneCall",
        },
      ],
    },

    // Why Choose Solar? (4 items)
    whySolar: {
      badge: "Section 09",
      title: "Why Choose Solar?",
      subtitle: "Four vital reasons why solar energy is transforming Indian agriculture",
      cards: [
        {
          title: "Clean Energy",
          desc: "Solar energy is renewable, generating zero pollution and preserving our rural air, soil, and water for future generations.",
          icon: "Leaf",
        },
        {
          title: "Smart Farming",
          desc: "Solar power can support agricultural activities with predictable daytime energy, enabling modern precision farming and automation.",
          icon: "Cpu",
        },
        {
          title: "Irrigation Support",
          desc: "Solar pumps can be used for water pumping right when crops need it most, eliminating night shifts in dangerous conditions.",
          icon: "Droplets",
        },
        {
          title: "Sustainable Future",
          desc: "Solar energy can help reduce dependence on conventional electricity and expensive fossil fuels, fostering economic resilience.",
          icon: "Globe",
        },
      ],
    },

    // Contact / Farmer Help Section
    contact: {
      badge: "Section 10",
      title: "Contact & Farmer Help Desk",
      subtitle: "Have questions about solar panels or water pumps? Send an inquiry to our student demonstration desk.",
      nameLabel: "Farmer Name *",
      namePlaceholder: "Enter your full name",
      phoneLabel: "Mobile Number *",
      phonePlaceholder: "10-digit mobile number",
      emailLabel: "Email (Optional)",
      emailPlaceholder: "yourname@example.com",
      locationLabel: "Village / Location *",
      locationPlaceholder: "e.g., Shirur, Dist. Pune",
      messageLabel: "Question / Message *",
      messagePlaceholder: "Ask your question about solar panels, pumps, or farm setup...",
      submitBtn: "Submit Query",
      submittingBtn: "Submitting...",
      successTitle: "Inquiry Submitted Successfully!",
      successDesc:
        "Thank you! Your query has been recorded in this college project demonstration. Our simulated student desk has verified your inputs.",
      submitAnotherBtn: "Submit Another Query",
      errorRequired: "This field is required.",
      errorPhone: "Please enter a valid 10-digit Indian mobile number.",
    },

    // Footer
    footer: {
      tagline: "Solar Energy Guide for Farmers",
      desc: "SolarSaathi is an educational initiative developed as a College Mini Project to guide farmers on adopting clean solar energy for sustainable agriculture.",
      quickLinksTitle: "Quick Navigation",
      academicTitle: "College Mini Project",
      academicDesc: "Built for academic demonstration of modern web technologies, responsive UI design, and bilingual agricultural education.",
      copyright: "© 2026 SolarSaathi – Solar Energy Guide for Farmers. College Mini Project.",
    },
  },

  mr: {
    // Navigation
    nav: {
      brandName: "सोलरसाथी",
      brandTagline: "शेतकऱ्यांसाठी सौर ऊर्जा मार्गदर्शक",
      home: "मुख्य पृष्ठ",
      solarEnergy: "सौर ऊर्जा",
      solarPanels: "Solar Panels",
      solarPump: "Solar Pump",
      uses: "सौर ऊर्जेचे उपयोग",
      benefits: "फायदे",
      schemes: "शासकीय योजना",
      calculator: "Calculator",
      maintenance: "Maintenance",
      whySolar: "सोलर का निवडावे?",
      contact: "संपर्क",
      language: "English",
      collegeProjectBadge: "कॉलेज मिनी प्रोजेक्ट",
    },

    // Hero Section
    hero: {
      heading: "उत्तम शेती भविष्यासाठी सौर ऊर्जा",
      subheading:
        "सौर ऊर्जेचा वापर करून शेतातील सिंचन, दैनंदिन कामे आणि स्वच्छ ऊर्जेचे उपाय कसे करता येतात ते सोप्या भाषेत शिका.",
      exploreBtn: "सौर ऊर्जा माहिती पाहा",
      calculatorBtn: "सोलर Calculator वापरा",
      badge1: "स्वच्छ हरित ऊर्जा",
      badge2: "भारतीय शेतीसाठी",
      badge3: "स्मार्ट शेती",
      farmerCaption: "श्री. संतोष पाटील, महाराष्ट्रातील शेतकरी त्यांच्या सोलर सिंचन व्यवस्थेसह",
      solarFeature1Title: "दिवसा सिंचन",
      solarFeature1Desc: "रात्रीच्या त्रासापासून पूर्ण मुक्ती",
      solarFeature2Title: "इंधनाचा खर्च शून्य",
      solarFeature2Desc: "नैसर्गिक मोफत सूर्यप्रकाशावर आधारित",
      solarFeature3Title: "भरवशाचे पाणी",
      solarFeature3Desc: "पिकांसाठी स्थिर पाणीपुरवठा",
    },

    // Quick Feature Cards (7 cards)
    quickFeatures: {
      title: "सोलर मार्गदर्शकाचे मुख्य विभाग",
      subtitle: "मार्गदर्शकातील संबंधित विभागात थेट जाण्यासाठी खालील विषयावर क्लिक करा.",
      cards: [
        {
          id: "solar-energy",
          title: "Solar Energy",
          desc: "Learn the basics of solar energy (सौर ऊर्जेची मूलभूत माहिती).",
          icon: "Sun",
          btnText: "अधिक माहिती",
        },
        {
          id: "solar-panels",
          title: "Solar Panels",
          desc: "Understand how solar panels work (सोलर पॅनल कसे काम करतात).",
          icon: "Zap",
          btnText: "अधिक माहिती",
        },
        {
          id: "solar-pump",
          title: "Solar Pump",
          desc: "Learn about solar water pumps for irrigation (सिंचनासाठी सोलर पंप).",
          icon: "Droplets",
          btnText: "अधिक माहिती",
        },
        {
          id: "benefits",
          title: "Benefits",
          desc: "Understand the benefits for farmers (शेतकऱ्यांसाठी मुख्य फायदे).",
          icon: "TrendingUp",
          btnText: "अधिक माहिती",
        },
        {
          id: "schemes",
          title: "Government Schemes",
          desc: "Learn about available government support (शासकीय योजना व मदत).",
          icon: "ShieldCheck",
          btnText: "अधिक माहिती",
        },
        {
          id: "calculator",
          title: "Solar Calculator",
          desc: "Estimate basic solar requirements (सोलर क्षमतेचा प्राथमिक अंदाज).",
          icon: "Calculator",
          btnText: "कॅल्क्युलेटर वापरा",
        },
        {
          id: "maintenance",
          title: "Maintenance",
          desc: "Learn simple solar system maintenance (सोपी देखभाल व काळजी).",
          icon: "Wrench",
          btnText: "अधिक माहिती",
        },
      ],
    },

    // Solar Energy Section
    solarEnergy: {
      badge: "विभाग ०१",
      title: "सौर ऊर्जा म्हणजे काय?",
      definition:
        "सूर्यप्रकाशापासून मिळणाऱ्या नैसर्गिक ऊर्जेला सौर ऊर्जा म्हणतात. Solar Panels सूर्यप्रकाशाचे विजेमध्ये रूपांतर करतात, ज्याचा वापर शेतातील विविध कामांसाठी केला जाऊ शकतो.",
      whyUsefulTitle: "शेतकऱ्यांसाठी सौर ऊर्जा का उपयुक्त आहे?",
      whyUsefulText:
        "शेतीमध्ये दररोज पाणी उपसण्यासाठी आणि उपकरणांसाठी विजेची गरज भासते. सौर ऊर्जेमुळे शेतकऱ्यांना रात्रीच्या विजेची वाट पाहावी लागत नाही किंवा डिझेलवर मोठा खर्च करावा लागत नाही.",
      renewableTitle: "अक्षय ऊर्जा संकल्पना (Renewable Energy)",
      renewableText:
        "कोळसा किंवा डिझेलप्रमाणे सूर्यप्रकाश कधीही संपत नाही. तो दररोज सकाळी निसर्गतः उपलब्ध होतो आणि त्यातून कसलेही प्रदूषण किंवा विषारी धूर निर्माण होत नाही.",
      agriImportanceTitle: "शेतीतील महत्त्व",
      agriImportanceText:
        "भारतात वर्षातील ३०० हून अधिक दिवस भरपूर सूर्यप्रकाश मिळतो. या ऊर्जेचा वापर करून शेतकरी दिवसा पिकांना पाणी देऊ शकतात आणि उत्पादन खर्च कमी करू शकतात.",
      diagramTitle: "सौर ऊर्जेची कार्यप्रवाह आकृती",
      diagramSubtitle: "सूर्यप्रकाशापासून शेतातील वापरापर्यंतचा सोपा मार्ग",
      steps: [
        { label: "सूर्यप्रकाश", desc: "नैसर्गिक सूर्यकिरणे शेतात पडतात", icon: "Sun" },
        { label: "Solar Panel", desc: "सिलिकॉन सेल्सद्वारे प्रकाश शोषला जातो", icon: "Grid" },
        { label: "वीज निर्मिती", desc: "स्वच्छ विद्युत ऊर्जेची निर्मिती होते", icon: "Zap" },
        { label: "शेतात वापर", desc: "पंप, दिवे व अवजारे चालवण्यासाठी वापर", icon: "Tractor" },
      ],
    },

    // Solar Panel Section
    solarPanel: {
      badge: "विभाग ०२",
      title: "Solar Panel म्हणजे काय?",
      intro:
        "Solar Panel हे सूर्यप्रकाश गोळा करून त्याचे विजेमध्ये रूपांतर करणारे साधन आहे. हे फोटोव्होल्टेइक (Photovoltaic) सेल्सच्या साहाय्याने बनवले जाते.",
      pvCellsTitle: "फोटोव्होल्टेइक (PV) सेल्स सोप्या भाषेत",
      pvCellsText:
        "फोटोव्होल्टेइक सेल्स हे सिलिकॉन पदार्थापासून बनवलेले पातळ थर असतात. जेव्हा सूर्यकिरण या सिलिकॉनवर पडतात, तेव्हा प्रकाशातील ऊर्जा त्यातील इलेक्ट्रॉन्सना गतिमान करते, ज्यामुळे थेट वीज (Direct Current - DC) निर्माण होते.",
      diagramBanner: "Sunlight → Photovoltaic Cells → Electrical Energy",
      elecGenTitle: "वीज निर्मितीची प्रक्रिया",
      elecGenText:
        "तयार झालेली डीसी वीज वायर्सद्वारे सोलर कंट्रोलरकडे जाते. कंट्रोलर पंपाला आवश्यक असणारा विद्युत दाब नियंत्रित करून सुरक्षितपणे वीज पुरवतो.",
      componentsTitle: "सिस्टीमचे मुख्य घटक:",
      components: [
        {
          name: "मजबूत काच (Toughened Glass)",
          desc: "पॅनलमधील नाजूक सेल्सचे पाऊस, धूळ, वारा आणि गारांपासून संरक्षण करणारी काच.",
        },
        {
          name: "फोटोव्होल्टेइक (PV) सेल्स",
          desc: "पॅनलचा मुख्य भाग; जिथे सूर्यप्रकाशाचे विजेमध्ये थेट रूपांतर घडते.",
        },
        {
          name: "ॲल्युमिनियम फ्रेम (Frame)",
          desc: "गंजरोधक धातूची चौकट, जी पॅनलला शेतात मजबुतीने टिकवून ठेवते.",
        },
        {
          name: "बॅकशीट आणि जंक्शन बॉक्स",
          desc: "खालील हवामान-रोधक थर आणि वायर्स जोडणारा सुरक्षित विद्युत बॉक्स.",
        },
      ],
      diagramCaption: "कृषी Solar Panel ची नामनिर्देशित सुबक रचना",
    },

    // Solar Water Pump Section
    solarPump: {
      badge: "विभाग ०३",
      title: "सिंचनासाठी Solar Water Pump",
      intro:
        "Solar Water Pump हा सोलर पॅनेल्समधून मिळणाऱ्या विजेवर चालणारा सिंचन पंप आहे. हा विहीर, बोअरवेल किंवा कालव्यातून पिकांसाठी पाणी उपसतो.",
      flowDiagramTitle: "Solar Pump ची कार्यपद्धती (Working Diagram)",
      flowSteps: [
        { name: "Sunlight", desc: "शेतातील मुबलक सूर्यप्रकाश" },
        { name: "Solar Panels", desc: "प्रकाशाचे विजेमध्ये रूपांतर करतात" },
        { name: "Controller", desc: "व्होल्टेज व पंप गती नियंत्रित करतो" },
        { name: "Solar Pump", desc: "विहिरीतून पाणी वर उचलतो" },
        { name: "Water", desc: "पाईपलाईनमधून पाण्याचा प्रवाह सुरू होतो" },
        { name: "Farm", desc: "ठिबक किंवा पाटाने पिकांना पाणी मिळते" },
      ],
      mainComponentsTitle: "Solar Pump सिस्टीमचे ५ मुख्य घटक:",
      componentsList: [
        {
          name: "Solar Panel",
          desc: "सूर्यप्रकाशापासून वीज तयार करण्यासाठी योग्य कोनात बसवलेले पॅनेल्स.",
          icon: "Sun",
        },
        {
          name: "Controller",
          desc: "पंपाचे मोटर नियंत्रण करणारा व कोरडा चालण्यापासून संरक्षण देणारा कंट्रोलर.",
          icon: "Sliders",
        },
        {
          name: "Pump",
          desc: "पाणी उपसण्यासाठी पाण्यात बुडणारा (सबमर्सिबल) किंवा पृष्ठभागावरील (सरफेस) पंप.",
          icon: "Droplet",
        },
        {
          name: "Pipes",
          desc: "विहिरीतून शेतातील पिकांपर्यंत पाणी नेणाऱ्या मजबूत एचडीपीई/पीव्हीसी पाईप्स.",
          icon: "Pipette",
        },
        {
          name: "Water Storage",
          desc: "सिंचनासाठी पाणी साठवणारी शेततळे किंवा उंचावरील पाण्याची टाकी.",
          icon: "Waves",
        },
      ],
      pumpTypesTitle: "शेतकऱ्यांसाठी पंपाचे दोन मुख्य प्रकार:",
      submersibleTitle: "सबमर्सिबल Solar Pump (Submersible)",
      submersibleDesc:
        "हा पंप बोअरवेलमध्ये किंवा खोल विहिरीत पाण्याच्या आत बुडवून बसवला जातो. जास्त खोलीवरून पाणी उपसण्यासाठी हा पंप सर्वोत्तम आहे.",
      surfaceTitle: "सरफेस Solar Pump (Surface Pump)",
      surfaceDesc:
        "हा पंप जमिनीवर, विहिरीच्या काठावर किंवा कालव्याशेजारी बसवला जातो. कमी खोलीवरील पाण्याच्या स्रोतांसाठी हा योग्य आहे.",
    },

    // Uses of Solar Energy (6 items)
    uses: {
      badge: "विभाग ०४",
      title: "शेतीमध्ये सौर ऊर्जेचे उपयोग",
      subtitle: "शेतातील दैनंदिन कामे सुलभ करणारे सौर ऊर्जेचे विविध उपयोग जाणून घ्या",
      cards: [
        {
          title: "Water pumping (पाणी उपसा)",
          desc: "बोअरवेल व विहिरीतून शेतीसाठी आवश्यक पाणी उपसण्यासाठी सोलर पंप चालवणे.",
          icon: "Droplet",
        },
        {
          title: "Irrigation (सिंचन व्यवस्था)",
          desc: "ठिबक सिंचन आणि तुषार सिंचन पद्धतींना योग्य दाबाने पाणी पुरवठा करणे.",
          icon: "Waves",
        },
        {
          title: "Farm lighting (शेतातील दिवे)",
          desc: "गोठा, शेतघर आणि कुंपणावर रात्रीच्या वेळी सुरक्षिततेसाठी दिवे लावणे.",
          icon: "Lightbulb",
        },
        {
          title: "Battery charging (बॅटरी चार्जिंग)",
          desc: "फवारणी पंप (स्प्रेअर), ट्रॅक्टर बॅटरी व मोबाईल फोन चार्ज करणे.",
          icon: "BatteryCharging",
        },
        {
          title: "Small agricultural equipment (लहान कृषी यंत्रे)",
          desc: "कुट्टी मशीन, धान्य चाळणी पंखा व स्वयंचलित फीडर सौर विजेवर चालवणे.",
          icon: "Cog",
        },
        {
          title: "Farm-related electrical devices (विद्युत उपकरणे)",
          desc: "सोलर कीटक सापळे, जमिनीतील ओलावा मोजणारी सेन्सर्स आणि सोलर कुंपण चालवणे.",
          icon: "Zap",
        },
      ],
    },

    // Benefits for Farmers (6 exact items, no unsupported statistics)
    benefits: {
      badge: "विभाग ०५",
      title: "शेतकऱ्यांसाठी सौर ऊर्जेचे फायदे",
      subtitle: "शाश्वत शेतीसाठी सौर तंत्रज्ञान का फायदेशीर ठरते",
      list: [
        {
          title: "Renewable source of energy (अक्षय ऊर्जा स्रोत)",
          desc: "सूर्यप्रकाश कधीही संपत नाही. शेतकऱ्यांना दररोज विनामूल्य मिळणारा अखंड ऊर्जा स्रोत उपलब्ध होतो.",
          icon: "Sun",
        },
        {
          title: "Reduces dependence on conventional electricity (पारंपरिक विजेवर अवलंबित्व कमी)",
          desc: "लोडशेडिंग, अचानक वीज जाणे आणि रात्रीच्या धोक्यात शेतात जाण्याच्या त्रासातून सुटका होते.",
          icon: "ZapOff",
        },
        {
          title: "Useful for irrigation (सिंचनासाठी अत्यंत उपयुक्त)",
          desc: "पिकांना ज्या वेळी पाण्याची सर्वात जास्त गरज असते त्या दिवसाच्या वेळेत हक्काचे पाणी मिळते.",
          icon: "Droplets",
        },
        {
          title: "Environment-friendly (पर्यावरणपूरक)",
          desc: "कसलाही धूर, विषारी वायू किंवा आवाज होत नाही. शेतीची जमीन व ग्रामीण हवा शुद्ध राहते.",
          icon: "Sprout",
        },
        {
          title: "Low operating requirements (कमी देखभाल गरज)",
          desc: "सोलर पॅनेल्समध्ये हलणारे यांत्रिक भाग नसतात, त्यामुळे वेळोवेळी केवळ साधी स्वच्छता पुरेशी ठरते.",
          icon: "Wrench",
        },
        {
          title: "Useful in areas with good sunlight (चांगल्या सूर्यप्रकाशाच्या भागात उपयुक्त)",
          desc: "आपल्या भागात मुबलक सूर्यप्रकाश असल्याने ही सिस्टीम वर्षभर अत्यंत कार्यक्षमतेने चालते.",
          icon: "MapPin",
        },
      ],
    },

    // Solar Requirement Calculator
    calculator: {
      badge: "विभाग ०६",
      title: "Solar Requirement Calculator",
      subtitle: "शेतासाठी आवश्यक सोलर क्षमता व पंपाचा प्राथमिक अंदाज घेण्यासाठी शैक्षणिक साधन",
      landSizeLabel: "१. शेताचे क्षेत्रफळ (एकरामध्ये)",
      landSizePlaceholder: "उदा. ३.०",
      waterLabel: "२. दैनिक पाण्याची गरज (लिटर प्रति दिवस)",
      waterPlaceholder: "उदा. १५०००",
      presetSmall: "५,००० लिटर (लहान क्षेत्र)",
      presetMedium: "१५,००० लिटर (मध्यम शेत)",
      presetLarge: "३०,००० लिटर (मोठे शेत)",
      hoursLabel: "३. दिवसा लागणारे पंपाचे तास",
      powerLabel: "४. पंपाची क्षमता (ऐच्छिक, HP मध्ये)",
      powerPlaceholder: "उदा. ३ किंवा ५",
      calculateBtn: "Calculate",
      resetBtn: "Reset",
      resultHeading: "प्राथमिक शैक्षणिक अंदाज",
      resultSolarReq: "Estimated Solar Requirement (अंदाजित सोलर क्षमता)",
      resultSystemCat: "Suggested System Category (शिफारस केलेला प्रकार)",
      resultRecTitle: "Basic Recommendation (प्राथमिक शिफारस)",
      disclaimerNote:
        "“This calculator provides a basic educational estimate. Actual system sizing should be confirmed by a qualified solar professional.”",
      recTextTemplate:
        "तुमच्या {land} एकर शेतासाठी व दररोज {water} लिटर पाण्याच्या गरजेसाठी, सुमारे {kwp} kWp क्षमतेचे Solar Panels आणि {hp} HP क्षमतेचा Solar Pump दिवसा सिंचनासाठी योग्य ठरेल.",
    },

    // Government Schemes Section
    schemes: {
      badge: "विभाग ०७",
      title: "Government Schemes & Support",
      subtitle: "शेतीमध्ये सोलर सिस्टीम बसवण्यासाठी शासकीय साहाय्य व योजना",
      intro:
        "केंद्र व राज्य शासनातर्फे शेतकऱ्यांना शेतीत सौर ऊर्जेचा वापर करण्यासाठी विविध योजनांद्वारे पाठबळ दिले जाते.",
      pmKusumTitle: "PM-KUSUM योजना माहिती",
      pmKusumDesc:
        "नवीन आणि नवीकरणीय ऊर्जा मंत्रालय (MNRE) द्वारे चालवली जाणारी प्रधानमंत्री शेतकरी ऊर्जा सुरक्षा व उत्थान महाअभियान (PM-KUSUM) ही प्रमुख राष्ट्रीय योजना आहे. यात तीन भाग आहेत:",
      compA: "घटक A: नापीक किंवा पडीक जमिनीवर लहान सौर ऊर्जा प्रकल्प उभारणे.",
      compB: "घटक B: शेतकऱ्यांना स्वतंत्र ऑफ-ग्रीड Solar Water Pump बसवण्यासाठी मदत.",
      compC: "घटक C: ग्रिडवर चालणाऱ्या जुन्या पंपांचे सोलरायझेशन करणे.",
      eligibilityTitle: "पात्रतेबाबत सामान्य माहिती:",
      eligibilityPoints: [
        "वैयक्तिक शेतकरी, शेतकऱ्यांचे गट, पाणी वापर संस्था आणि शेतकरी उत्पादक कंपन्या (FPOs).",
        "जमीन मालकीचा ७/१२ उतारा किंवा वैध भाडेपट्टी करार असणारे शेतकरी.",
        "पाण्याचा खात्रीशीर स्रोत (विहीर, बोअरवेल, शेततळे) उपलब्ध असणे आवश्यक.",
        "घटक B अंतर्गत यापूर्वी शेतात पारंपरिक विद्युत पंप जोडणी नसलेले शेतकरी.",
      ],
      applicationGuidanceTitle: "शेतकऱ्यांसाठी अर्जाची मार्गदर्शक माहिती:",
      applicationSteps: [
        {
          step: "१. अधिकृत नोंदणी",
          desc: "राज्याच्या अधिकृत अक्षय ऊर्जा एजन्सी पोर्टलवर (उदा. महाऊर्जा - MEDA) किंवा पीएम-कुसुम पोर्टलवर नोंदणी करा.",
        },
        {
          step: "२. कागदपत्रे जोडणे",
          desc: "आधार कार्ड, ७/१२ व ८-अ उतारा, बँक पासबुक आणि पाण्याचा स्रोत असल्याचे प्रमाणपत्र अपलोड करा.",
        },
        {
          step: "३. स्थळ पाहणी",
          desc: "अधिकृत संस्था प्रतिनिधी विहिरीची खोली व जागेची पाहणी करून सिस्टीमची व्यवहार्यता तपासतात.",
        },
        {
          step: "४. सिस्टीम बसवणे व चाचणी",
          desc: "अधिकृत सोलर कंपनीद्वारे शेतात Solar Panels व Pump ची सुरक्षित उभारणी करून चाचणी केली जाते.",
        },
      ],
      officialNoticeText:
        "“Scheme details, eligibility and subsidy amounts may change. Farmers should verify current information through official government sources.”",
      officialBtn: "Check Official Information",
    },

    // Maintenance Section (5 items)
    maintenance: {
      badge: "विभाग ०८",
      title: "Solar System Maintenance मार्गदर्शक",
      subtitle: "सोलर सिस्टीमची कार्यक्षमता टिकवून ठेवण्यासाठी शेतकऱ्यांसाठी सोप्या सूचना",
      steps: [
        {
          title: "Panel Cleaning",
          desc: "Keep panels free from dust and dirt. पॅनलवरील धूळ, माती व पक्ष्यांची विष्ठा आठवड्यातून एकदा सकाळी किंवा संध्याकाळी थंड पाण्याने व मऊ कापडाने स्वच्छ करा.",
          icon: "Sparkles",
        },
        {
          title: "Wiring Check",
          desc: "Inspect visible wires and connections. उघड्या वायर्स, जंक्शन बॉक्स आणि अर्थिंग सैल झाली नाही ना याची महिन्यातून एकदा नियमित तपासणी करा.",
          icon: "Eye",
        },
        {
          title: "Pump Inspection",
          desc: "Check the pump regularly. पंपाच्या सक्शन पाईपमध्ये गाळ किंवा कचरा अडकला नाही ना ते तपासा आणि पंप चालतानाचा आवाज व कंपने सामान्य आहेत का ते पाहा.",
          icon: "Activity",
        },
        {
          title: "System Check",
          desc: "Monitor the system for unusual performance. कंट्रोलरच्या डिस्प्लेवरील इंडिकेटर लाईट्सवर लक्ष ठेवा आणि पाणी उपशामध्ये अचानक घट झाली असल्यास तपासणी करा.",
          icon: "ShieldAlert",
        },
        {
          title: "Professional Service",
          desc: "Contact a qualified technician when required. कोणत्याही अंतर्गत तांत्रिक किंवा इलेक्ट्रॉनिक बिघाडासाठी स्वतः उघडण्याऐवजी अधिकृत तंत्रज्ञांची मदत घ्या.",
          icon: "PhoneCall",
        },
      ],
    },

    // Why Choose Solar? (4 items)
    whySolar: {
      badge: "विभाग ०९",
      title: "Why Choose Solar?",
      subtitle: "शेतीमध्ये सौर ऊर्जा निवडण्याची चार मुख्य कारणे",
      cards: [
        {
          title: "Clean Energy",
          desc: "Solar energy is renewable. सौर ऊर्जा ही स्वच्छ व नैसर्गिक असून यामुळे हवा आणि मातीचे प्रदूषण होत नाही.",
          icon: "Leaf",
        },
        {
          title: "Smart Farming",
          desc: "Solar power can support agricultural activities. सौर ऊर्जेच्या मदतीने शेतीची कामे वेळेवर आणि सुलभपणे पूर्ण होतात.",
          icon: "Cpu",
        },
        {
          title: "Irrigation Support",
          desc: "Solar pumps can be used for water pumping. पिकांना आवश्यक तेवढे पाणी दिवसाच उपसून पिकांचे आरोग्य चांगले राखता येते.",
          icon: "Droplets",
        },
        {
          title: "Sustainable Future",
          desc: "Solar energy can help reduce dependence on conventional electricity. पारंपारिक विजेवरील अवलंबित्व कमी होऊन शेती स्वयंपूर्ण बनते.",
          icon: "Globe",
        },
      ],
    },

    // Contact / Farmer Help Section
    contact: {
      badge: "विभाग १०",
      title: "Contact / Farmer Help",
      subtitle: "सोलर पॅनल किंवा पंपाबाबत काही प्रश्न असल्यास आमच्या विद्यार्थी मदत कक्षाशी संपर्क साधा.",
      nameLabel: "शेतकऱ्याचे नाव (Farmer Name) *",
      namePlaceholder: "आपले पूर्ण नाव प्रविष्ट करा",
      phoneLabel: "मोबाईल क्रमांक (Mobile Number) *",
      phonePlaceholder: "१० अंकी मोबाईल क्रमांक",
      emailLabel: "ईमेल (ऐच्छिक)",
      emailPlaceholder: "नाव@उदा.com",
      locationLabel: "गाव / ठिकाण (Village / Location) *",
      locationPlaceholder: "उदा. शिरूर, जि. पुणे",
      messageLabel: "आपला प्रश्न / संदेश (Question / Message) *",
      messagePlaceholder: "सोलर पॅनल किंवा पंपाबाबत आपला प्रश्न येथे लिहा...",
      submitBtn: "Submit Query",
      submittingBtn: "पाठवत आहे...",
      successTitle: "माहिती यशस्वीरित्या नोंदवली गेली!",
      successDesc:
        "धन्यवाद! आपल्या प्रश्नाची या कॉलेज प्रोजेक्ट प्रात्यक्षिकामध्ये यशस्वी नोंद झाली आहे. फॉर्म व्हॅलिडेशन यशस्वीरीत्या पूर्ण झाले आहे.",
      submitAnotherBtn: "दुसरा प्रश्न पाठवा",
      errorRequired: "ही माहिती भरणे आवश्यक आहे.",
      errorPhone: "कृपया वैध १० अंकी भारतीय मोबाईल क्रमांक प्रविष्ट करा.",
    },

    // Footer
    footer: {
      tagline: "शेतकऱ्यांसाठी सौर ऊर्जा मार्गदर्शक",
      desc: "SolarSaathi हा भारतीय शेतकऱ्यांना शेतीमध्ये स्वच्छ सौर ऊर्जेचा वापर समजावून सांगण्यासाठी कॉलेज मिनी प्रोजेक्ट म्हणून विकसित केलेला मार्गदर्शक आहे.",
      quickLinksTitle: "द्रुत दुवे",
      academicTitle: "College Mini Project",
      academicDesc: "आधुनिक वेब तंत्रज्ञान, सुलभ मांडणी आणि दुहेरी भाषा (मराठी/इंग्रजी) समर्थनाचे शैक्षणिक प्रात्यक्षिक.",
      copyright: "© २०२६ SolarSaathi – शेतकऱ्यांसाठी सौर ऊर्जा मार्गदर्शक. College Mini Project.",
    },
  },
};

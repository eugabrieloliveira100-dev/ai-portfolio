import { Film, Smartphone, Activity, Globe, Sparkles } from 'lucide-react';

export const CATEGORIES = [
  { id: 'cinematic', name: 'Cinematic & Sci-Fi', icon: Film },
  { id: 'shorts', name: 'Short Form & Reels (9:16)', icon: Smartphone },
  { id: 'body', name: 'Body Language & Action', icon: Activity },
  { id: 'world', name: 'Locations & Worldbuilding', icon: Globe },
  { id: 'stylized', name: 'Stylized & Animation', icon: Sparkles },
];

export const VIDEOS = [
  {
    id: 'ARl-CdRnDBw',
    categoryId: 'cinematic',
    title: 'Nostalgic Wasteland',
    duration: '0:30',
    aspect: '16/9',
    thumbnail: 'https://img.youtube.com/vi/ARl-CdRnDBw/hqdefault.jpg',
    prompt: 'Handheld extreme close-up on the face of a white man with a nostalgic and emotional expression. He is wearing a slightly old linen shirt with frayed edges and a worn-out texture, where the micro-fibers are catching the light. His face is photorealistic and hyper-detailed, featuring visible pores, micro-perspiration, natural skin imperfections, and subsurface scattering illuminated directly by the sun.\nHe is standing in a magical, nostalgic environment that blends a desert wasteland with remnants of a beautiful fantasy garden. A wild wind is blowing, dynamically moving his hair, his clothes, and the translucent leaves behind him. Cinematic lighting, golden hour, volumetric lighting with god rays, dark fantasy aesthetic, 8k resolution.',
    analysis: 'This prompt is a masterclass in evoking emotion through texture and environmental interaction. An "extreme close-up" demands flawless facial rendering, which is achieved by instructing the AI to calculate "subsurface scattering", "micro-perspiration", and "natural skin imperfections". The detail of "micro-fibers catching the light" on the frayed linen shirt pushes the photorealism to the absolute limit. Furthermore, specifying a "wild wind dynamically moving his hair" introduces complex physics, breathing life into the static frame. The juxtaposition of a "desert wasteland" with a "beautiful fantasy garden" bathed in "golden hour" lighting creates a visually striking and profoundly nostalgic atmosphere.'
  },
  {
    id: '3SqcL8dgjDo',
    categoryId: 'world',
    title: 'The Weary Outlaw',
    duration: '0:30',
    aspect: '16/9',
    thumbnail: 'https://img.youtube.com/vi/3SqcL8dgjDo/hqdefault.jpg',
    prompt: 'Handheld tracking shot following a rugged Black man walking slowly through a sun-scorched desert toward a colossal distant castle. He looks like a weary warrior and outlaw, with visible skin imperfections, subsurface scattering, micro-perspiration, and a prominent sword-blow scar on his photorealistic, hyper-detailed face. His eyes evoke ancient knowledge. He carries a bulging, heavily worn white canvas bag in one hand, suggesting a heavy load of coins. He wears dented, battered metallic armor that is visibly oxidized, with scuffed edges, covered by a long, sun-bleached linen shirt. He has a good but slightly oxidized sword at his hip. In the far distance sits an enormous ancient castle half-buried in shifting sweeping dunes, featuring wind-eroded walls and giant fortified battlements, with the vague outline of two guards visible on the distant wall. The entire scene is bathed in a cinematic, low-angle golden hour lighting with prominent volumetric god rays filtering through the terrible sand-dust wind blowing against his face. High contrast shadows dominate areas out of direct light. Visible heat distortion ripples rise from the hot sand. The man smiles subtly with complex emotion upon spotting the castle, continuing his slow barefoot walk toward it. 8k resolution, highly tactile textures.',
    analysis: 'Using a "handheld tracking shot" immediately grounds this scene in gritty realism, simulating a documentary or survival film aesthetic. The prompt expertly balances macro and micro details. On the macro level, the "heat distortion ripples" and "volumetric god rays" through the sand-dust wind create a palpable, oppressive environment. On the micro level, describing the armor as "visibly oxidized with scuffed edges" and the face with a "prominent sword-blow scar" tells a visual story of a long, harsh journey. The contrast between the sun-scorched foreground and the colossal, half-buried castle in the background gives the scene an epic sense of scale and destination.'
  },
  {
    id: 'zGv-6fCAaEA',
    categoryId: 'body',
    title: 'The Proud King',
    duration: '0:30',
    aspect: '16/9',
    thumbnail: 'https://img.youtube.com/vi/zGv-6fCAaEA/hqdefault.jpg',
    prompt: 'Slow dolly-in camera shot of an old king standing perfectly still on a high palace balcony, looking out over his vast city. His face is photorealistic and hyper-detailed, featuring a tired expression that breaks into a slight, proud smile. He has visible pores, skin imperfections, a prominent battle scar, dewy skin, and subsurface scattering. He wears a golden crown, brushed metallic armor under a long shirt, a perfectly sewn golden cloak without any wrinkles, white linen pants, and red war boots. He is standing alone next to two plant pots and the stone support of the balcony. In the vast background, a beautiful, hot, sunny day illuminates a giant bustling city full of people, houses, soldiers, merchants, a grand temple of his god, and a giant city gate. Cinematic lighting, bright harsh midday sun creating specular highlights on his golden crown and armor. 8k resolution, highly detailed.',
    analysis: 'The power of this prompt lies in its masterful use of contrast and advanced material rendering. By specifying a "slow dolly-in camera shot" on an old king standing "perfectly still", the prompt creates a majestic anchor point against the chaotic motion of a "giant bustling city" in the background. This dichotomy commands the viewer\'s attention immediately.\n\nTechnically, the use of "bright harsh midday sun" paired with "specular highlights" tells the AI exactly how the light should interact with the metallic surfaces of the golden crown and armor, ensuring they look like real, reflective materials rather than flat yellow textures. Furthermore, incorporating "subsurface scattering" alongside "visible pores" and "dewy skin" prevents the character from looking like a plastic 3D model, granting him profound humanity and the weary dignity of an old ruler. This combination of directed lighting, precise material properties, and purposeful camera movement is the absolute essence of professional AI cinematography.'
  },
  {
    id: 'Nqq53VTNgoQ',
    categoryId: 'cinematic',
    title: 'The Hunted Criminal',
    duration: '0:30',
    aspect: '16/9',
    thumbnail: 'https://img.youtube.com/vi/Nqq53VTNgoQ/hqdefault.jpg',
    prompt: 'A slow creeping dolly-in camera shot, angled close, captures a man kneeling in a dim, shadowed corner of a cabin kitchen, hiding behind a sink at night. The man, a criminal from an ancient time, is completely terrified, with a dewy, hyperdetailed face full of skin imperfections, visible pores, and subsurface scattering, illuminated only by a subtle, cold blue hour light filtering through wet window glass and wooden planks. Heavy rain is pouring outside, complete with a closed iron door, window bars with two big padlocks, and no lightning, that contours his silhouette with extreme chiaroscuro. The room is mostly in deep shadow, except for these subtle, cold reflections. The man is completely barefoot, wearing a very dirty, muddy white shirt with frayed edges and worn-out, muddy pants. He holds an old, rusted sword tightly in his hand with tactile details, and an old, dirty white cloth is tied around his injured arm trying to protect a wound. The environment is highly detailed, photorealistic, 8k resolution, cinematic lighting motivated by the cold external storm. No background music, only the sound of rain, the sound of soldiers hunting him, and the sound of dogs barking.',
    analysis: 'The use of "extreme chiaroscuro" lighting combined with "subsurface scattering" (the way light penetrates and scatters beneath the surface of the skin) brings a brutal, tangible weight to the character\'s terror. By specifying a "slow creeping dolly-in camera shot", the prompt forces the AI to employ a classic thriller technique: physically closing the distance between the audience and the subject, which psychologically amplifies claustrophobia and impending doom. This specific cinematic language—dictating camera movement, motivated lighting (the cold blue hour light), and microscopic textural details (visible pores, frayed edges)—is what elevates an AI generation from a mere moving image to a professional, cinema-worthy shot. It directs the AI to think like a Director of Photography rather than just an illustrator.\n\nRegarding prompt fidelity: the resulting video matches the text 99%. The only missing element is the sound of dogs barking. As we can deduce, this happens due to an inherent AI safety and focus mechanism. Current state-of-the-art video models prioritize visual cohesion and artifact prevention. When tasked with rendering a visually heavy scene alongside multiple complex, overlapping audio layers (heavy rain + marching soldiers + barking dogs), the AI dynamically adapts. It chooses to omit the lowest-priority audio track to prevent processing overload, audio distortion, or visual hallucinations, ensuring the final output remains incredibly polished and stable.'
  },
  {
    id: 'lbjo0i34NaM',
    categoryId: 'body',
    title: 'Grim Reality',
    duration: '0:30',
    aspect: '16/9',
    thumbnail: 'https://img.youtube.com/vi/lbjo0i34NaM/hqdefault.jpg',
    prompt: 'Handheld camera, slow creeping pan following a man sleeping soundly and drooling on an old, worn-out sofa. Close-up on his face shows visible pores, imperfections, subsurface scattering, and dewy perspiration. He wears a dirty, frayed white linen shirt with food stains and a thread-level detailed visible weave. He is in a simple room with a dirty floor cluttered with rubbish and a fallen beer bottle. Abandoned, moldy food is on a heavily rusted metal table. The door is closed and secured with a padlock. A closed, heavily oxidized, scratched window catches low-angle cold light from a \'blue hour\' stormy sky. Rain and distant thunder can be seen and heard through the window, with backlit rain droplets. The air is heavy with atmospheric haze. Dramatic, low-light chiaroscuro lighting emphasizes the textures. Photorealistic, 8k resolution.',
    analysis: 'This prompt excels in environmental storytelling and grim realism. The "handheld camera, slow creeping pan" immediately establishes an invasive, voyeuristic tone, perfectly suited for the gritty subject matter. Lighting is meticulously controlled using "low-angle cold light from a \'blue hour\' stormy sky" combined with "chiaroscuro lighting", which exaggerates the shadows and highlights grotesque textures like "moldy food," "heavily rusted metal," and "scratched window" glass. By calling out specific macro details—such as "dewy perspiration," "food stains," and a "thread-level detailed visible weave"—the prompt forces the AI to prioritize ultra-high-resolution textures over a clean, idealized image, resulting in a visceral, cinematic depiction of decay and abandonment.'
  },
  {
    id: '7q5iLkc01wo',
    categoryId: 'cinematic',
    title: 'The Anxious Young King',
    duration: '0:30',
    aspect: '16/9',
    thumbnail: 'https://img.youtube.com/vi/7q5iLkc01wo/hqdefault.jpg',
    prompt: 'Slow dolly in from a medium shot to a close-up of a young king sitting alone on his throne, with a long red carpet rolling out in front of him. He is wearing a long white shirt underneath brushed golden armor, knee-high war boots ready for battle, a heavy red cloak draped over his shoulders, and a golden crown. He holds a golden scepter.As the camera gets closer, his face becomes hyper-detailed and photorealistic, revealing visible pores, subtle skin imperfections, subsurface scattering, and micro-perspiration. His expression shows deep reflection and subtle anxiety.Cinematic lighting with bright god rays piercing through the throne room windows, illuminating the king. Tactile dust motes are floating in the hot air, creating the sensation of a sweltering day outside. 8k resolution, highly detailed.',
    analysis: 'The brilliance of this prompt lies in the pacing dictated by the camera movement. A "slow dolly in from a medium shot to a close-up" forces the AI to dynamically scale the level of detail. It starts by establishing the regal environment (throne, red carpet, armor) and smoothly transitions into an intimate, psychological portrait ("subtle anxiety"). The inclusion of "tactile dust motes" and "god rays" adds atmospheric depth, making the air feel thick and heavy, perfectly mirroring the young king\'s internal burden. The hyper-specific facial details ("micro-perspiration", "subsurface scattering") ensure the final close-up feels devastatingly human rather than synthetic.'
  },
  {
    id: 'BprAUz26okg',
    categoryId: 'world',
    title: 'The Cosmic Entity',
    duration: '0:30',
    aspect: '16/9',
    thumbnail: 'https://img.youtube.com/vi/BprAUz26okg/hqdefault.jpg',
    prompt: 'Epic wide aerial tracking shot following a colossal entity standing perfectly still in an infinite river. His flawless grey, almost transparent face with visible pores, subtle skin imperfections, and subsurface scattering exhibits a millennial patience as he looks directly at the camera. Giant pitch-black vacuum eyes contain tiny white stars mirroring the distant sky. He wears a divine, heavy, drenched wool cloak that hangs static, with thread-level detail visible, showing completely no wind as the posture is upright and serious. His feet are submerged in a perfect black mirror river with glassy, detailed water reflections. Above and behind him is a crisp, pitch-black deep space void, completely devoid of blue hour tones and clouds. Just a few tiny, sharp white pinpoints of distant stars are scattered across the profound darkness. Cinematic lighting, illuminated only by soft, crisp starlight and the profound blackness, reflecting on his skin and the glassy river\'s surface. High contrast shadows, 8k resolution, highly detailed, photorealistic.',
    analysis: 'The prompt masterfully dictates a surreal, cosmic scale using an "epic wide aerial tracking shot". The contrast between the "colossal entity standing perfectly still" and the camera movement creates a profound sense of awe. By explicitly defining negative space—"pitch-black deep space void, completely devoid of blue hour tones and clouds"—it forces the AI to avoid its default tendency to generate atmospheric skyscapes, relying solely on "crisp starlight" for illumination. The material definitions are incredibly specific: the "perfect black mirror river" juxtaposed with the "heavy, drenched wool cloak" showing "thread-level detail" ensures the scene feels grounded and photorealistic despite its fantastical, godly nature. The instruction "subsurface scattering" on a "flawless grey, almost transparent face" gives the entity a terrifyingly divine texture.'
  },
  {
    id: 'LsKy4LIJhWw',
    categoryId: 'shorts',
    title: 'Vertical Cinematic: The Crow',
    duration: '0:15',
    aspect: '9/16',
    thumbnail: 'https://img.youtube.com/vi/LsKy4LIJhWw/hqdefault.jpg',
    prompt: '[COLOQUE SEU PROMPT AQUI] Vertical video 9:16, close up, dark fantasy character, atmospheric lighting, detailed textures, cinematic.',
    analysis: '[COLOQUE SUA ANÁLISE AQUI] Formato vertical focado no centro da tela. A iluminação de recorte separa o personagem do fundo, ideal para prender a atenção no feed do YouTube Shorts.'
  },
  {
    id: '8qEFH6J_Yg0',
    categoryId: 'shorts',
    title: 'Vertical Fantasy: The Knight',
    duration: '0:15',
    aspect: '9/16',
    thumbnail: 'https://img.youtube.com/vi/8qEFH6J_Yg0/hqdefault.jpg',
    prompt: '[COLOQUE SEU PROMPT AQUI] 9:16 aspect ratio, medieval knight, dramatic pose, snow, hyper-realistic, 8k.',
    analysis: '[COLOQUE SUA ANÁLISE AQUI] Ao manter a ação centralizada, evitamos que a interface do YouTube Shorts (botões de curtir/comentar do lado direito) cubra os detalhes importantes da cena.'
  },
  {
    id: 'TGg6QvpOPFk',
    categoryId: 'shorts',
    title: 'Vertical Thriller: The Shadows',
    duration: '0:15',
    aspect: '9/16',
    thumbnail: 'https://img.youtube.com/vi/TGg6QvpOPFk/hqdefault.jpg',
    prompt: '[COLOQUE SEU PROMPT AQUI] Vertical shot, dark alleyway, mysterious figure approaching, horror lighting, photorealistic.',
    analysis: '[COLOQUE SUA ANÁLISE AQUI] O enquadramento em 9:16 aumenta a sensação de proximidade e intimidade com o perigo, perfeito para cenas de suspense.'
  },
  {
    id: 'qPvrYUvZhaw',
    categoryId: 'shorts',
    title: 'Vertical World: Burning Town',
    duration: '0:15',
    aspect: '9/16',
    thumbnail: 'https://img.youtube.com/vi/qPvrYUvZhaw/hqdefault.jpg',
    prompt: '[COLOQUE SEU PROMPT AQUI] 9:16 format, tracking shot through a burning medieval village, intense fire, cinematic.',
    analysis: '[COLOQUE SUA ANÁLISE AQUI] O movimento de câmera no formato vertical precisa ser mais lento para não causar desorientação. A IA lidou com a profundidade do fogo perfeitamente aqui.'
  },
  {
    id: '2G0QSG9d8I0',
    categoryId: 'shorts',
    title: 'Vertical Action: The Clash',
    duration: '0:15',
    aspect: '9/16',
    thumbnail: 'https://img.youtube.com/vi/2G0QSG9d8I0/hqdefault.jpg',
    prompt: '[COLOQUE SEU PROMPT AQUI] Vertical video, dynamic action shot, dark fantasy soldiers, slow motion, detailed armor.',
    analysis: '[COLOQUE SUA ANÁLISE AQUI] O uso de câmera lenta em Shorts é um excelente "hook" (gancho) para prender o usuário nos primeiros 3 segundos do vídeo.'
  },
  {
    id: 'mXLh8d3WsYA', 
    categoryId: 'cinematic',
    title: 'The Soldier King',
    duration: '0:30',
    aspect: '16/9',
    thumbnail: 'https://img.youtube.com/vi/mXLh8d3WsYA/hqdefault.jpg',
    prompt: 'Medium shot in a dimly lit, high-tech command center with cold blue architectural lighting. In the center stands a \'Soldier King\', a leader wearing ornate, matte-black carbon fiber armor with golden filigree and a glowing regal crest on his chest. His helmet is off, revealing a stern, scarred face and eyes cold as ice. He stands tall, hands resting on a high-tech hilt. Flanking him are two elite shock troopers in full futuristic combat gear, clutching sleek pulse rifles. The leader leans forward slightly, his voice a deep, gravelly rasp that vibrates through the room: \'There is an intruder among us... find him.\' The two soldiers nod in synchronized mechanical precision, their helmet visors glowing red as they turn to leave. The background shows holographic displays of the city and the empty metallic capsule from the previous scene. 8k resolution, cinematic shadows, heavy atmosphere, hyper-realistic textures',
    analysis: 'By defining complex material textures like "matte-black carbon fiber" paired with "golden filigree", the AI is forced to render highly contrasting surfaces under the "cold blue architectural lighting". The inclusion of dialogue ("There is an intruder among us...") acts as an anchor for the character\'s facial micro-expressions and lip movements, generating an aura of commanding authority. Furthermore, the juxtaposition of the static, regal leader against the "synchronized mechanical precision" of the shock troopers adds immense narrative depth to a single shot.'
  },
  {
    id: 'PXpFSx_IuRI',
    categoryId: 'world',
    title: 'Cyberpunk Metropolis',
    duration: '0:30',
    aspect: '16/9',
    thumbnail: 'https://img.youtube.com/vi/PXpFSx_IuRI/hqdefault.jpg',
    prompt: 'A breathtaking wide-angle shot of a sprawling, multi-layered dystopian metropolis at night under heavy acid rain. Massive, monolithic skyscrapers with glowing neon advertisements in multiple languages pierce through a thick layer of smog. High above, sleek black military cruisers and civilian aerocars weave through the skyline, their engines emitting a low-frequency hum. Below, on the crowded neon-lit streets, a dense population of weary citizens moves in a chaotic flow, their faces illuminated by the flickering glare of holographic billboards. Cutting through the crowd, a squad of elite soldiers in matte-black tactical armor and glowing red-eyed visors patrols with mechanical precision, their futuristic rifles held at the ready. Swarms of small surveillance drones hover overhead, casting searchlight beams onto the civilians. The atmosphere is thick with steam and blue-magenta neon haze. High-contrast, cinematic grit, 8k resolution, Unreal Engine 5 render style, hyper-detailed cyberpunk aesthetic.',
    analysis: 'This prompt perfectly executes macro-worldbuilding by explicitly describing vertical depth—from "high above" aerocars down to the "crowded neon-lit streets" below. Instructing the AI to use an "Unreal Engine 5 render style" alongside "blue-magenta neon haze" guarantees that highly saturated, physically accurate light bounces off the wet surfaces created by the "heavy acid rain". The dynamic elements—patrolling soldiers, hovering drones with searchlights, and a chaotic civilian flow—transform the environment from a static digital painting into a breathing, oppressive cyberpunk ecosystem.'
  },
  {
    id: 'AfUM3nc0v2U',
    categoryId: 'body',
    title: 'The Condemned',
    duration: '0:30',
    aspect: '16/9',
    thumbnail: 'https://img.youtube.com/vi/AfUM3nc0v2U/hqdefault.jpg',
    prompt: 'A cinematic, static low-angle shot inside a claustrophobic, soaking wet steel prison cell, heavily evoking the stark, high-contrast chiaroscuro lighting and grim atmosphere of 1920s and 1930s classic horror films. A terrified man sits huddled on the flooded floor at the back of the cell, desperately clutching a small knife in his visibly shaking hands. He is barefoot, wearing a soaked, ragged white shirt and small shorts. His photorealistic, hyper-detailed face is drenched in sweat and marked with old scars, his expression showing deep, suppressed terror. Heavy leaks drip from the ceiling onto the decaying wooden bed. Deep, oppressive shadows stretch across the rusted steel walls and heavy cell bars. Black and white or desaturated monochromatic color grading. Audio: the haunting sound of dripping water, rats scurrying, distant chilling screams, and the violent, rhythmic shaking of metal bars from other unseen inmates.',
    analysis: 'By invoking the visual language of "1920s and 1930s classic horror films", the prompt instantly establishes a stylistic baseline for the AI, ensuring the "desaturated monochromatic color grading" feels intentional rather than just a filter. The "static low-angle shot" enhances the feeling of entrapment and dread. Detailing the environment as a "soaking wet steel prison cell" with "heavy leaks" forces the AI engine to calculate complex liquid physics and specular reflections on the character\'s sweaty, scarred face, massively boosting the photorealism. It’s an impeccable example of building psychological horror through lighting and texture.'
  },
  {
    id: '20nm-nUQPaA',
    categoryId: 'world',
    title: 'Nuclear Dawn',
    duration: '0:30',
    aspect: '16/9',
    thumbnail: 'https://img.youtube.com/vi/20nm-nUQPaA/hqdefault.jpg',
    prompt: 'A cinematic slow push-in close-up shot of a terrified man standing by an open living room window. He is wearing a white shirt and is barefoot. His photorealistic, hyper-detailed face is dewy with cold sweat, showing visible pores and skin imperfections. Suddenly, a nuke bomb fell from the sky and a blinding, warm orange light from a massive distant explosion washes over his face, casting intense specular highlights on his skin and reflecting in his eyes. His shaking hand slowly moves to rest on his chest. As the blinding light consumes the room, his expression shifts from pure terror to peaceful acceptance, he gently closes his eyes, whispering his final words. Highly detailed, 8k resolution, dramatic lighting shifting from dim room light to overwhelming apocalyptic light. Audio: blaring distant war sirens, followed by the terrifying, deafening rumble of an approaching explosion.',
    analysis: 'This sequence relies entirely on dynamic, motivated lighting to drive its narrative. The prompt brilliantly commands the lighting to shift "from dim room light to overwhelming apocalyptic light", which tests the AI\'s ability to smoothly transition exposure and color temperature within a single continuous shot. The "intense specular highlights" reflecting in his eyes and on his sweaty skin create a visceral connection to the off-screen event. More impressively, the prompt successfully guides the AI through a complex emotional arc—from "pure terror to peaceful acceptance"—proving that character acting and narrative progression are entirely possible in AI generation.'
  },
  {
    id: '0Uu7e39O5Ag',
    categoryId: 'cinematic',
    title: 'Acceptance',
    duration: '0:30',
    aspect: '16/9',
    thumbnail: 'https://img.youtube.com/vi/0Uu7e39O5Ag/hqdefault.jpg',
    prompt: 'A cinematic slow push-in close-up shot of a terrified man standing by an open living room window. He is wearing a white shirt and is barefoot. His photorealistic, hyper-detailed face is dewy with cold sweat, showing visible pores and skin imperfections. Suddenly, a blinding, warm orange light from a massive distant explosion washes over his face, casting intense specular highlights on his skin and reflecting in his eyes. His shaking hand slowly moves to rest on his chest. As the blinding light consumes the room, his expression shifts from pure terror to peaceful acceptance, he gently closes his eyes, whispering his final words. Highly detailed, 8k resolution, dramatic lighting shifting from dim room light to overwhelming apocalyptic light. Audio: blaring distant war sirens, followed by the terrifying, deafening rumble of an approaching explosion.',
    analysis: 'Almost identical to the previous prompt, this version refines the setup by omitting the literal "nuke bomb fell" description, relying purely on the consequence of the event (the light). By focusing strictly on how the "blinding, warm orange light... washes over his face", the AI dedicates all its processing power to rendering the subsurface scattering on the skin and the accurate reflections in the character\'s pupils. The camera instruction ("slow push-in") inherently builds intimacy, making the character\'s transition into "peaceful acceptance" feel deeply personal and emotionally resonant amidst the apocalyptic glow.'
  },
  {
    id: 'HeoXWLM2cmY',
    categoryId: 'stylized',
    title: 'Retro Anime Journey',
    duration: '0:30',
    aspect: '16/9',
    thumbnail: 'https://img.youtube.com/vi/HeoXWLM2cmY/hqdefault.jpg',
    prompt: 'The man is in a quiet moment of peace, reflecting on his life. He sits still, lost in thought, looking out the large oval window, making only very subtle, natural movements like gentle breathing and a slow blink. Outside the window, the retro-futuristic city and canyon landscape move smoothly past the glass, creating a strong cinematic parallax effect to show the train is traveling forward at a steady speed. The warm, comforting lighting inside the cabin remains stable. 1980s retro anime style, highly detailed. Audio: No background music, only the rhythmic, comforting mechanical sound of the train moving along the tracks.',
    analysis: 'A masterclass in stylistic control. By explicitly requesting a "1980s retro anime style", the engine entirely alters its rendering logic, moving away from photorealism toward nostalgic cel-shading and specific color palettes. The technical genius here is the request for a "strong cinematic parallax effect" outside the window, which gives the 2D aesthetic a profound sense of depth and motion without requiring the character to move. Restricting the character to "very subtle, natural movements like gentle breathing and a slow blink" ensures the animation loop remains smooth, comforting, and authentic to the meditative pacing of classic Japanese animation.'
  },
  {
    id: 'pC37LXDCmkY',
    categoryId: 'body',
    title: 'The Hunted',
    duration: '0:30',
    aspect: '16/9',
    thumbnail: 'https://img.youtube.com/vi/pC37LXDCmkY/hqdefault.jpg',
    prompt: 'A slow creeping dolly-in camera shot, angled close, captures a man kneeling in a dim, shadowed corner of a cabin kitchen, hiding behind a sink at night. The man, a criminal from an ancient time, is completely terrified, with a dewy, hyperdetailed face full of skin imperfections, visible pores, and subsurface scattering, illuminated only by a subtle, cold blue hour light filtering through wet window glass and wooden planks. Heavy rain is pouring outside, complete with a closed iron door, window bars with two big padlocks, and no lightning, that contours his silhouette with extreme chiaroscuro. The room is mostly in deep shadow, except for these subtle, cold reflections. The man is completely barefoot, wearing a very dirty, muddy white shirt with frayed edges and worn-out, muddy pants. He holds an old, rusted sword tightly in his hand with tactile details, and an old, dirty white cloth is tied around his injured arm trying to protect a wound. The environment is highly detailed, photorealistic, 8k resolution, cinematic lighting motivated by the cold external storm. No background music, only the sound of rain, the sound of soldiers hunting him, and the sound of dogs barking.',
    analysis: 'This prompt uses environmental modifiers to shape the character\'s desperate reality. By specifying "cold blue hour light filtering through wet window glass" and "extreme chiaroscuro", the lighting maps the contours of the subject\'s terror, highlighting the "dewy, hyperdetailed face". The attention to tactile props—an "old, rusted sword" and a "dirty white cloth" tied around a wound—anchors the scene in physical consequences. The "slow creeping dolly-in" serves a dual purpose: it amplifies the claustrophobia of hiding behind a sink while gradually revealing the breathtaking micro-textures of the muddy, frayed clothing and the character\'s visible pores.'
  },
  {
    id: 'UHmOOawQJPA',
    categoryId: 'cinematic',
    title: 'O Viajante do Tempo',
    duration: '0:30',
    aspect: '16/9',
    thumbnail: 'https://img.youtube.com/vi/UHmOOawQJPA/hqdefault.jpg',
    prompt: 'Cenário e Atmosfera: Interior de uma oficina secreta subterrânea. Estética de cinema de ficção científica dos anos 80, filmado em película 35mm com granulação visível e brilho de lente (lens flare) sutil. A iluminação é dramática, em tons de azul cobalto e âmbar, vinda de monitores CRT e lâmpadas de tungstênio penduradas. O ar está denso com partículas de poeira e fumaça de solda. Ação Cinematográfica: A câmera começa com um close-up detalhado em mãos trêmulas conectando dois cabos de cobre grossos que faíscam. A câmera faz um slow zoom out para revelar o viajante do tempo: um homem de meia-idade, suado e focado. Ele veste um traje experimental bizarro—uma mistura de colete de chumbo, sensores médicos colados e um capacete rudimentar de metal. Ele está cercado por uma "teia de aranha" de fios coloridos, capacitores gigantes e relógios analógicos. O Clímax: Ele aperta um interruptor industrial pesado. A sala começa a vibrar. Ele olha para a câmera com uma expressão de medo e determinação, seus lábios se movem e ouvimos sua voz rouca: "The time has come." A luz ao fundo começa a distorcer a realidade, sugerindo o início da viagem temporal. Notas de Direção (Parâmetros Técnicos): Estilo Visual: Retro-futurismo de 1985, alto contraste, sombras profundas (chiaroscuro). Paleta de Cores: Néon vintage, cinza industrial e o brilho esverdeado de telas de computador antigas. Som (Audio cues): O zumbido elétrico crescendo (electrical hum), o estalo de faíscas e a voz abafada pelo capacete.',
    analysis: 'Even when written in Portuguese, the AI interprets these highly specific cinematic parameters flawlessly. The instruction to emulate "80s sci-fi cinema shot on 35mm film with visible grain" sets a distinct, nostalgic texture, completely avoiding the overly clean look of digital renders. The color grading is meticulously defined ("cobalt blue and amber", "vintage neon"), providing a striking teal-and-orange contrast. The complex sequence of actions—starting with a close-up on sparking cables and performing a "slow zoom out" to reveal the bizarre, practical-effects-style costume—shows how staging and progressive revelation can be hard-coded into the generation, resulting in a thrilling, narrative-driven shot.'
  },
  {
    id: 'pl-fc1Ig2zQ',
    categoryId: 'cinematic',
    title: 'The Inventor',
    duration: '0:30',
    aspect: '16/9',
    thumbnail: 'https://img.youtube.com/vi/pl-fc1Ig2zQ/hqdefault.jpg',
    prompt: 'Cinematic close-up moving to medium shot. Interior, secret basement workshop, 1980s retro-futurism aesthetic. The room is dimly lit, filled with a chaotic web of thick copper wires, glowing vacuum tubes, and flickering analog monitors. A lone inventor, wearing a DIY protective suit made of padded silver lead-lined fabric and a complex glass visor, is hunched over a pulsating machine. Sparks fly as he connects a final high-voltage cable. The atmosphere is thick with dust motes and electrical haze. The camera captures the sweat on his brow through the visor. He looks at the camera with a mix of fear and triumph. Moody synth-wave lighting, teal and orange color grading, 35mm film grain, highly detailed textures, realistic motion.',
    analysis: 'This prompt successfully engineers a palpable, electrically charged atmosphere. By requesting "glowing vacuum tubes", "flickering analog monitors", and "sparks flying", the AI is tasked with managing multiple dynamic, practical light sources within a "dimly lit" environment. The instruction to capture "sweat on his brow through the visor" forces the engine to calculate complex light refractions and transparency, adding incredible depth to the character model. The finishing touches—"teal and orange color grading" and "35mm film grain"—wrap the highly detailed textures in a cohesive, cinematic 1980s retro-futuristic aesthetic.'
  },
  {
    id: '3zwQ26XphZo',
    categoryId: 'body',
    title: 'The Waiting',
    duration: '0:30',
    aspect: '16/9',
    thumbnail: 'https://img.youtube.com/vi/3zwQ26XphZo/hqdefault.jpg',
    prompt: 'The camera remains still for a few seconds—respecting the silence of waiting. She stands on the platform, motionless not out of rigidity, but out of acceptance. Her relaxed body betrays someone accustomed to waiting for things to arrive on their own. The rain falls slowly, trickling down her uncovered hair, marking the fabric of her clothes. She doesn\'t wear a hat—not out of carelessness, but because there\'s no urgency. There\'s no dramatic gesture, no restlessness. Just presence. In the background, the train hasn\'t arrived yet, but it already exists. It announces its arrival with a distant, metallic sound, almost a murmur that crosses the frame. A movement off-screen. A growing weight. She doesn\'t look directly. She doesn\'t adjust her posture. She doesn\'t prepare. The behavior is banal, everyday—precisely because of that, true. It\'s the body of someone who has already understood the rhythm of the world: things come when they come. The camera observes. It doesn\'t judge. The train approaches, but it\'s still out of reach—like an idea, like a decision, like something that doesn\'t yet demand a reaction. The rain continues. It remains still. And in that interval, in that almost nothingness, the scene unfolds.',
    analysis: 'A staggeringly poetic and behavioral prompt. Instead of dictating extreme actions, it guides the AI through negative space and subtle psychology. By explicitly requesting "no dramatic gesture, no restlessness" and dictating that she is "motionless not out of rigidity, but out of acceptance", the AI dials back its default tendency to over-animate. This results in incredibly grounded, melancholic micro-movements. The focus on the physics of the rain "trickling down her uncovered hair" grounds the philosophical text in tactile reality, proving that AI video generation can capture quiet, human stillness just as well as explosive action.'
  }
];

export const GLOSSARY_TERMS = [
  {
    id: 'chiaroscuro',
    term: 'Chiaroscuro',
    category: 'Lighting',
    definition: 'An Italian term meaning "light-dark." In cinematography, it refers to strong contrasts between light and dark to create a sense of volume, dramatic tension, and atmospheric depth.',
    promptTip: 'Use "extreme chiaroscuro" or "high-contrast chiaroscuro lighting" when you want a moody, dramatic, or horror-like atmosphere.',
    fullArticle: [
      "The origin of Chiaroscuro dates back to the Renaissance, pioneered by master painters like Caravaggio and Rembrandt. It is the bold manipulation of light and deep shadows to carve a three-dimensional subject out of a two-dimensional canvas.",
      "In AI cinematography, standard prompts often result in flat, evenly lit scenes because the models are heavily trained on modern, well-lit stock photography. If you simply type 'a man in a dark room', the AI will often artificially brighten the shadows, destroying the mood.",
      "To master this technique in AI, you must dictate the shadows as much as you dictate the light. By using prompt keywords like 'extreme chiaroscuro', 'single motivated light source', and 'pitch black negative space', you force the AI engine to respect the darkness. This technique is invaluable for generating thrillers, dark fantasy, and emotionally heavy scenes."
    ]
  },
  {
    id: 'subsurface-scattering',
    term: 'Subsurface Scattering (SSS)',
    category: 'Material & Texture',
    definition: 'The physical phenomenon where light penetrates the surface of a translucent object, bounces around inside, and exits at a different point. It is what makes human skin, wax, and leaves look realistic instead of like solid plastic.',
    promptTip: 'Always add "subsurface scattering" alongside "dewy skin" or "visible pores" for hyper-realistic human faces.',
    fullArticle: [
      "Subsurface Scattering (often abbreviated as SSS in 3D rendering) is the holy grail of digital human realism. When light hits human skin, it doesn't just bounce off like a mirror. It enters the epidermis, scatters through the blood and tissue, and glows from within. This is most easily seen when holding a flashlight behind your fingers.",
      "Early AI video models suffered heavily from the 'plastic skin' effect. Subjects looked like mannequins because the AI rendered light as purely reflective. By explicitly prompting 'subsurface scattering', you are giving the AI engine a technical command to simulate this complex light-tissue interaction.",
      "When combining SSS with environmental modifiers like 'volumetric god rays' hitting the side of a character's face, the AI will generate a beautiful, soft red/orange glow at the edge of the shadows, elevating your character from a synthetic generation to a photorealistic human actor."
    ]
  },
  {
    id: 'dolly-in',
    term: 'Dolly-In',
    category: 'Camera Movement',
    definition: 'A camera move where the entire camera physically moves closer to the subject. Unlike a zoom (which just magnifies the image and flattens the background), a dolly-in creates a feeling of intimacy, tension, or a sudden realization.',
    promptTip: 'Specify "slow creeping dolly-in camera shot" to force the AI to smoothly move through the 3D space of the scene.',
    fullArticle: [
      "Many AI creators confuse a 'Zoom' with a 'Dolly'. A zoom simply changes the focal length of the lens, magnifying the image. A Dolly-In, however, physically moves the camera through 3D space toward the subject. This changes the perspective and maintains the spatial relationship between the foreground and background.",
      "In traditional cinema, a slow dolly-in is the universal language for 'pay attention to this'. It is used by directors like Steven Spielberg to signify a character's internal realization, or by horror directors to build excruciating tension.",
      "When prompting AI video models (like Runway, Sora, or Kling), explicitly writing 'slow dolly-in camera shot' forces the engine to calculate spatial depth. It prevents the AI from simply morphing the image and instead makes it render the background passing by the edges of the frame, resulting in a profoundly cinematic and grounded shot."
    ]
  },
  {
    id: 'volumetric-lighting',
    term: 'Volumetric Lighting / God Rays',
    category: 'Lighting',
    definition: 'A lighting technique where shafts of light become visible as they shine through an environment, usually interacting with dust, smoke, or fog in the air. Often called "god rays".',
    promptTip: 'Combine "volumetric lighting" with environmental atmospheric effects like "dust motes" or "atmospheric haze" to give the light a physical presence in the room.',
    fullArticle: [
      "Light is invisible until it hits an object. Volumetric lighting exploits this physical rule by filling the air with particulates—dust, smoke, mist, or fog—allowing the camera to capture the actual volume and shape of the light beam.",
      "Often referred to as 'God Rays' when shining through a window or forest canopy, volumetric lighting adds immense atmospheric depth and a sense of scale to any scene. It separates the subject from the background, creating a 3D feel in a 2D medium.",
      "To generate this perfectly in AI, never just ask for 'good lighting'. You must construct the environment. Use prompt combinations like: 'cinematic volumetric lighting', 'heavy atmospheric haze', and 'tactile dust motes floating in the light beams'. This gives the AI the environmental context needed to render the air itself."
    ]
  }
];

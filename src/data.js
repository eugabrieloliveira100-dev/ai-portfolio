import React, { useState, useEffect } from 'react';
import { 
  Play, Copy, ArrowLeft, Heart, CheckCircle2, 
  Sparkles, Coffee, ChevronRight, Film, Smartphone, Activity, Globe
} from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';

const CATEGORIES = [
  { id: 'cinematic', name: 'Cinematic & Sci-Fi', icon: Film },
  { id: 'shorts', name: 'Short Form & Reels (9:16)', icon: Smartphone },
  { id: 'body', name: 'Body Language & Action', icon: Activity },
  { id: 'world', name: 'Locations & Worldbuilding', icon: Globe },
  { id: 'stylized', name: 'Stylized & Animation', icon: Sparkles },
];

const VIDEOS = [
  {
    id: 'ARl-CdRnDBw',
    slug: 'nostalgic-wasteland',
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
    slug: 'the-weary-outlaw',
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
    slug: 'the-proud-king',
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
    slug: 'the-hunted-criminal',
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
    slug: 'grim-reality',
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
    slug: 'the-anxious-young-king',
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
    slug: 'the-cosmic-entity',
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
    slug: 'vertical-cinematic-the-crow',
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
    slug: 'vertical-fantasy-the-knight',
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
    slug: 'vertical-thriller-the-shadows',
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
    slug: 'vertical-world-burning-town',
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
    slug: 'vertical-action-the-clash',
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
    slug: 'the-soldier-king',
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
    slug: 'cyberpunk-metropolis',
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
    slug: 'the-condemned',
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
    slug: 'nuclear-dawn',
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
    slug: 'acceptance',
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
    slug: 'retro-anime-journey',
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
    slug: 'the-hunted',
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
    slug: 'o-viajante-do-tempo',
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
    slug: 'the-inventor',
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
    slug: 'the-waiting',
    categoryId: 'body',
    title: 'The Waiting',
    duration: '0:30',
    aspect: '16/9',
    thumbnail: 'https://img.youtube.com/vi/3zwQ26XphZo/hqdefault.jpg',
    prompt: 'The camera remains still for a few seconds—respecting the silence of waiting. She stands on the platform, motionless not out of rigidity, but out of acceptance. Her relaxed body betrays someone accustomed to waiting for things to arrive on their own. The rain falls slowly, trickling down her uncovered hair, marking the fabric of her clothes. She doesn\'t wear a hat—not out of carelessness, but because there\'s no urgency. There\'s no dramatic gesture, no restlessness. Just presence. In the background, the train hasn\'t arrived yet, but it already exists. It announces its arrival with a distant, metallic sound, almost a murmur that crosses the frame. A movement off-screen. A growing weight. She doesn\'t look directly. She doesn\'t adjust her posture. She doesn\'t prepare. The behavior is banal, everyday—precisely because of that, true. It\'s the body of someone who has already understood the rhythm of the world: things come when they come. The camera observes. It doesn\'t judge. The train approaches, but it\'s still out of reach—like an idea, like a decision, like something that doesn\'t yet demand a reaction. The rain continues. It remains still. And in that interval, in that almost nothingness, the scene unfolds.',
    analysis: 'A staggeringly poetic and behavioral prompt. Instead of dictating extreme actions, it guides the AI through negative space and subtle psychology. By explicitly requesting "no dramatic gesture, no restlessness" and dictating that she is "motionless not out of rigidity, but out of acceptance", the AI dials back its default tendency to over-animate. This results in incredibly grounded, melancholic micro-movements. The focus on the physics of the rain "trickling down her uncovered hair" grounds the philosophical text in tactile reality, proving that AI video generation can capture quiet, human stillness just as well as explosive action.'
  }
];

const GLOSSARY_TERMS = [
  {
    id: 'chiaroscuro',
    term: 'Chiaroscuro',
    category: 'Lighting',
    definition: 'An Italian term meaning "light-dark." In cinematography, it refers to strong contrasts between light and dark to create a sense of volume, dramatic tension, and atmospheric depth.',
    promptTip: 'Use "extreme chiaroscuro" or "high-contrast chiaroscuro lighting" when you want a moody, dramatic, or horror-like atmosphere.',
    fullArticle: [
      `The modern era of artificial intelligence video generation is defined by a paradox of fidelity. Current diffusion models and transformer-based architectures are capable of rendering reality with staggering, microscopic precision—from the intricate weave of a linen dress to the individual pores on a subject's face. Yet, despite these monumental leaps in hyper-realism, default AI outputs consistently fail at one of the most foundational, emotionally resonant elements of visual storytelling: the rendering of true, deep darkness.`,
      `Modern neural networks possess an inherent, algorithmic fear of the dark. Unprompted, they suffer from a chronic, systemic bias toward flat, over-illuminated, stock-photography aesthetics. When tasked with creating a moody, dramatic scene, the default behavior of these models is to flood the environment with artificial fill lights, lifting the black levels into a muddy gray and destroying any sense of atmospheric tension.`,
      `To break free from this computational safety net and achieve genuine cinematic artistry, digital filmmakers and prompt engineers must look backward to a technique perfected over five centuries ago during the Renaissance: chiaroscuro. By mastering the intricate, highly technical language of shadow, negative space, and directional lighting, creators can override default model behaviors. This comprehensive report deconstructs the history, psychological function, and technical application of chiaroscuro, providing an exhaustive framework for forcing AI models to respect the dark and generate visceral, photorealistic cinematic video.`,
      
      `PART I: THE ANATOMY AND ORIGIN OF CHIAROSCURO`,
      `Before it functioned as a high-value token in a prompt engine, chiaroscuro was a revolutionary leap in human visual perception. To understand how to manipulate AI models into rendering cinematic shadows, one must first understand the mechanical and historical foundations of the technique itself.`,
      
      `The Linguistic and Visual Definition: The term itself is a straightforward marriage of two Italian words: "chiaro", meaning clear, bright, or light; and "scuro", meaning dark or obscure. At its fundamental core, chiaroscuro is the deliberate, dramatic interplay between light and shadow utilized to create the illusion of three-dimensional volume, atmospheric depth, and structural mass on a flat, two-dimensional surface.`,
      `In the physical world, light wraps around objects, creating gradients of illumination that inform the human brain about the shape, distance, and texture of the environment. Chiaroscuro artificially replicates this physical phenomenon, utilizing extreme contrast to trick the eye into perceiving immense depth where none physically exists.`,
      
      `Ancient Roots - The Shadow Painters of Greece: While the term is synonymous with the Italian Renaissance, the earliest conceptual roots of the technique date back as far as the 5th century BCE in Ancient Greece. Apollodorus Skiagraphos, a pioneering Greek painter whose very name translates to "shadow-painter," is credited with utilizing hatched, cross-cutting shadows to suggest rudimentary volume in his frescoes.`,
      `This early shading technique survived the collapse of antiquity in a rather crude, standardized form within Byzantine art. It was subsequently refined during the Middle Ages, becoming a standard artistic convention by the early fifteenth century in manuscript illuminations across Italy and Flanders, eventually spreading throughout all Western art. However, these early iterations were largely functional, used simply to give figures a slight sense of weight rather than to drive the emotional narrative of the piece.`,
      
      `The Renaissance Shift - Da Vinci and the Sfumato Revolution: During the Renaissance, the concept of chiaroscuro evolved from a simple shading tool into a dedicated artistic medium. Initially, the term referred to a specific method of drawing on colored paper, wherein the artist worked outward from the paper's base mid-tone—applying white gouache to simulate highlights and deep ink or bodycolor to carve out shadows.`,
      `As the 15th and 16th centuries progressed, polymaths like Leonardo da Vinci radically advanced the technique. In works such as Virgin and Child with St Anne and John the Baptist (1499–1500), da Vinci integrated chiaroscuro with "sfumato"—the soft, imperceptible, smoke-like blending of tonal transitions. This marriage of extreme contrast with impossibly smooth gradients allowed visual narratives to emerge from the shadows with an unprecedented, almost haunting degree of realism. The technique transformed the canvas from a flat plane into a deep, atmospheric window.`,
      
      `The Masters of the Dark - Caravaggio and Rembrandt: The technique reached its absolute zenith during the Baroque era, championed by two towering figures who permanently defined the dramatic potential of extreme lighting: Michelangelo Merisi da Caravaggio and Rembrandt van Rijn. Their distinct approaches to shadow form the basis of all modern cinematic lighting today.`,
      
      `Caravaggio and the Violence of Tenebrism: Caravaggio pioneered a radical, aggressive subset of chiaroscuro known as Tenebrism. Instead of utilizing gentle gradients or balanced compositions, Caravaggio violently plunged his backgrounds into pitch-black, impenetrable voids. He then illuminated his subjects with a single, harsh, highly motivated light source, often simulating a high, off-camera window.`,
      `This extreme, high-contrast lighting was not merely an aesthetic choice; it was a psychological weapon. In renowned works like Boy bitten by a Lizard, the stark contrast between the enveloping darkness of the room and the hyper-clarity of the illuminated skin, the white folds of cloth, and the rose in the subject's hair makes the image inherently edgy, volatile, and sinister. Caravaggio’s lighting intentionally isolated characters, highlighted fleeting expressions of debauchery or sudden terror, and forced the viewer's eye exactly where the artist demanded with ruthless precision.`,
      
      `Rembrandt and the Empathy of the Glow: Rembrandt, conversely, utilized chiaroscuro with a profound sense of psychological empathy, warmth, and quiet introspection. Operating within the Dutch Golden Age, Rembrandt's application of the technique often relied on intimate, low-intensity light sources, such as candlelight or the fading ambient light of a single window, to create rich, glowing textures that felt less hostile than Tenebrism.`,
      `Rembrandt perfected a specific facial lighting setup that remains a foundational pillar of modern portraiture and cinematography. Known today simply as "Rembrandt lighting," this setup is characterized by a strong directional key light that leaves one side of the subject's face in deep shadow, save for a single, illuminated inverted triangle of light resting on the shadowed cheek. This specific ratio of light to shadow softened the harshness of Tenebrism, wrapping subjects in shadows that felt protective, melancholic, and deeply human.`,
      `Together, these classical masters established the absolute grammar of visual lighting. They proved definitively that darkness is not merely the absence of light; it is a physical, weighty presence that dictates the emotional resonance and narrative focus of an image.`,
      
      `PART II: THE PSYCHOLOGICAL FUNCTION OF CHIAROSCURO IN CINEMA`,
      `When the visual principles of Renaissance painting transitioned from the canvas to the celluloid of early motion pictures, chiaroscuro became the foundational backbone of visual storytelling. In modern cinematography, chiaroscuro is technically defined as a high-contrast, low-key lighting setup where a key light serves as the primary—and sometimes solitary—light source, intentionally plunging large portions of the frame into deep black.`,
      `The psychological implications of this setup are immense, directly dictating how an audience interprets the emotional subtext of a scene without a single line of exposition.`,
      
      `Translating Canvas to Celluloid - The DeMille Legacy: The transition of chiaroscuro into film was heavily driven by pioneers like Cecil B. DeMille and his art director, Wilfred Buckland, following 1914. They adapted the technique using harsh arc lights to cast sharp illumination in one direction while leaving the opposing side completely unlit. This approach became so strongly associated with the director that it was colloquially dubbed "DeMille lighting" within early Hollywood, marking the definitive moment the industry began utilizing lighting for expressive, rather than purely functional, effects.`,
      
      `The Trident of Film Tone and Intentional Underexposure: In film theory, visual tone is established through a three-pronged framework known as the "Trident of Film Tone": Lighting, Exposure, and Art Direction. While art direction dictates the physical space and lighting dictates the quantity of light generated on set, exposure dictates how much light is actually permitted to hit the camera sensor.`,
      `Chiaroscuro relies heavily on intentional underexposure. For instance, in The Godfather series, cinematographer Gordon Willis famously underexposed the Corleone family, shrouding their eyes and environments in heavy, suffocating shadows. This underexposure was not a technical error; it was a deliberate tonal choice that reflected the family's descent into moral darkness and corruption. The relationship between these three elements allows filmmakers to manipulate a project's tone and convey a unified, subconscious voice directly to the viewer.`,
      
      `Controlling Visibility - Guiding the Viewer's Eye: In the visual chaos of a moving image, a director must establish absolute control over where the audience looks. Chiaroscuro lighting operates as a ruthless visual funnel. By engulfing irrelevant background details in deep shadow and highlighting only crucial narrative elements—a glinting weapon, a trembling hand, a subtle shift in facial expression—the filmmaker ensures the viewer’s focus is locked precisely on the subject.`,
      `This control over visibility is paramount for building narrative tension and shaping the rhythm of a sequence. When large portions of the frame fade into shadow, the audience is forced to lean in and actively engage with the image, subconsciously searching the darkness for hidden context. The stark interplay of light and dark inherently creates an atmosphere dripping with mystery, suspense, and psychological intensity.`,
      
      `Genre-Defining Shadows - Noir, Horror, and Dramatic Intimacy: Different cinematic genres rely on highly specific applications of chiaroscuro to evoke distinct psychological responses:`,
      `• Film Noir: Chiaroscuro is the absolute lifeblood of the noir genre. Emerging prominently during the era of German Expressionism and American 1940s detective thrillers, noir relies on harsh, angular shadows that function as characters themselves. The extreme contrast in noir is synonymous with crime, intrigue, and a cynical world where morality exists only in shades of gray. In this genre, shadows often slice across a character's face, visually representing a fractured psyche, hidden motives, or unavoidable doom.`,
      `• Horror and Dark Fantasy: In horror and thriller films, chiaroscuro is weaponized to manufacture primal fear. Shadows are utilized specifically to conceal the unknown, leveraging the human mind's evolutionary terror of what hides in the dark. By utilizing techniques like under-lighting—where the light source originates from below the subject—filmmakers challenge the brain's natural expectation of overhead sunlight, creating instant supernatural, villainous, or deeply unsettling effects. The shadows hide the monster, forcing the audience's imagination to fill the void with their own worst fears.`,
      `• Drama and Romance: In dramatic cinema, chiaroscuro is deployed to isolate characters during pivotal moments of introspection, significantly heightening the emotional impact of a scene. Softer, warmer contrasts—highly reminiscent of Rembrandt's Dutch chiaroscuro—can evoke profound intimacy, melancholy, and vulnerability, drawing the viewer into the character's internal emotional state.`,
      
      `PART III: THE "FLAT LIGHTING" EPIDEMIC IN AI VIDEO GENERATION`,
      `If chiaroscuro is so crucial to visual storytelling, why do cutting-edge AI video and image models consistently fail to produce it natively? Digital creators frequently find themselves locked in a frustrating battle with their tools, inputting highly descriptive prompts for "dark, moody, terrifying alleyways" only to receive evenly illuminated, plasticky, broadcast-ready scenes.`,
      `This phenomenon is not a temporary bug; it is a fundamental architectural limitation stemming from how these neural networks are trained and how they mathematically interpret requests for visual data.`,
      
      `The Dataset Bias - The Dominance of Stock Photography: The primary culprit behind AI's flat lighting epidemic is severe dataset bias. Modern generative models process billions of image-text pairs scraped from the internet. A disproportionately massive percentage of this training data consists of commercial stock photography, modern digital marketing assets, corporate headshots, and brightly lit, auto-exposed smartphone images.`,
      `In the realm of professional stock photography, the ultimate goal is maximum clarity and versatility. Human creatives meticulously light scenes with flat, high-key lighting to ensure every element is visible, intentionally minimizing shadows so the images can be easily edited or overlaid with text for corporate use.`,
      `Because the neural network is overwhelmingly fed these brightly lit, hyper-visible images, the model mathematically equates "good quality," "professional," and "high resolution" with "evenly illuminated." When an AI is prompted to generate a high-quality video, its underlying architecture naturally gravitates toward the mathematical average of its training data. It effectively scrubs out dramatic contrast in favor of commercial safety, assuming the user wants a bright, clear image.`,
      
      `Shortcut Learning and Spurious Correlations: This intense dataset bias triggers a dangerous machine-learning flaw known as "shortcut learning," driven by spurious correlations. To understand this, consider a well-documented AI failure: if an image recognition model is trained on a dataset where most images of cows are set against lush, grassy fields, it might mistakenly learn that the presence of green grass is the defining feature of a cow. Consequently, the model starts associating grassy backgrounds with cows, even when no cow is present. The model takes a computational "shortcut," focusing on an irrelevant feature (the grass) instead of the actual subject.`,
      `AI video models form identical, incorrect associations regarding lighting. If the model’s dataset contains millions of images of "indoor rooms" that are brightly lit by commercial flashes, it assumes "bright light" is an inherent, unavoidable property of the concept of an "indoor room." Therefore, when a creator explicitly prompts for an "unlit room at night," the model experiences a computational conflict. It recognizes the word "room" and attempts to fulfill the prompt by generating a space with the lighting characteristics it heavily associates with rooms—resulting in a brightly lit space that blatantly ignores the creator's instructions for darkness.`,
      
      `The Residue of Model Shadows: Even as platforms continuously update their models to be more "cinematic," earlier training biases linger through a phenomenon known as "model shadows." These are the lingering, ghostly effects of old training data, configurations, or behavioral rules that persist in AI systems long after updates or retraining cycles have occurred.`,
      `When generative video models are fine-tuned on new cinematic data, they can still carry over the behavioral quirks from their original stock-photography training. This means the AI may possess a behavioral ghost that subconsciously forces a digital fill-light into a scene, artificially lifting the black levels and destroying the pitch-black negative space required for true chiaroscuro. The model is essentially terrified of losing detail in the shadows, constantly fighting the prompt engineer's attempts to crush the blacks.`,
      
      `PART IV: MASTERING CHIAROSCURO THROUGH PROMPT ENGINEERING`,
      `Overcoming the flat lighting epidemic requires a highly strategic, almost adversarial approach to prompt engineering. Creators cannot simply type "dark video" and expect a masterpiece; the AI must be forcefully guided away from its default biases using professional cinematography terminology, precise modifier stacking, and aggressive negative space framing.`,
      
      `The Professional Prompt Structure - The 6-Layer Framework: To generate professional-grade chiaroscuro, prompts must be structured logically, mirroring how a physical film crew breaks down a scene. Modern AI generators, utilizing transformer-based models, process text as a collection of weighted tokens. Words appearing earlier in the prompt carry significantly more mathematical weight and influence over the final image. Therefore, burying crucial lighting cues at the very end of a prompt severely reduces their effectiveness. The most successful prompts across platforms utilize a structured, multi-layered framework to build the instruction set:`,
      `• Subject & Action: Clearly define the focal point and their movement (e.g., "Medium tracking shot of a weathered detective lighting a cigarette").`,
      `• Location/Context: Establish the physical environment (e.g., "Inside a claustrophobic, rain-slicked telephone booth at night").`,
      `• Lighting & Atmosphere: The critical layer for chiaroscuro. This must be explicit and aggressive (e.g., "Extreme chiaroscuro, single harsh overhead light, deep contrasted shadows swallowing the periphery").`,
      `• Camera & Composition: Dictate the lens, angle, and framing (e.g., "Low angle close-up, 85mm lens, shallow depth of field").`,
      `• Style/Medium: Provide an artistic anchor that implies lighting (e.g., "1940s film noir aesthetic, high-contrast monochrome").`,
      `• Technical Modifiers: Instructions for the rendering engine regarding fidelity (e.g., "Volumetric fog, 8k resolution, cinematic color grading, hyper-detailed skin texture").`,
      
      `Forcing Negative Space - The Power of What Isn't There: Negative space in film is the area around the primary subject that is left intentionally empty or plunged into complete darkness. It emphasizes what is missing, creating unease, isolation, or a sense of immense scale. To force AI models to respect negative space and generate pitch-black shadows, creators must use specific, absolute modifiers rather than vague adjectives.`,
      
      `Prompt Modifiers to Override Defaults:`,
      `• Extreme Contrast: "Extreme chiaroscuro, High-contrast lighting, Low-key lighting setup, Tenebrism style" — Forces the model to separate the light and dark pixel values sharply, mathematically preventing the generation of mid-tone "mud" or unwanted ambient fill lights.`,
      `• Void Environments: "Pitch black negative space, Deep shadows swallowing periphery, Void isolation, Spotlight isolation" — Overrides the model's inherent desire to populate the background with highly detailed objects. Strips away context to isolate the subject purely in a sea of black pixels.`,
      `• Motivated Sources: "Single motivated light source, Sole light source, Harsh directional key light" — Prevents the AI from accidentally generating ambient light bouncing from impossible, non-existent angles. Anchors the shadow generation to one highly specific origin point.`,
      `• Compositional Tension: "Off-center composition, Tiny subject surrounded by vast darkness, Minimalist isolation" — Uses the empty dark space dynamically. Placing a brightly lit subject off-center surrounded by black creates extreme psychological unease and narrative focus.`,
      
      `Intensity Modifiers - Fine-Tuning the Dial: Lighting modifiers act as direct intensity dials for the AI's rendering engine. A prompt simply asking for "bright light" lacks the nuance required for cinematic storytelling. Specifying the exact quality of the light provides the model with precise mathematical parameters.`,
      `Platforms like Kling AI and Sora respond exceptionally well to intensity words. Using modifiers such as subtle, moderate, intense, and extreme regulates the exact power and spill of the lighting effect. For example, "softly lit" yields a completely different emotional effect than "harshly lit," even if the physical lighting setup is identical. Furthermore, pairing intensity with contrast targets is highly effective. Prompting "moderate key, gentle roll-off, visible shadow detail" will yield a softer drama, whereas "intense key, sharp roll-off, crushed blacks" will yield aggressive Tenebrism.`,
      
      `Positive vs. Negative Prompting for Shadows: Because AI models are stubbornly biased toward adding light, utilizing positive prompts is sometimes insufficient. When the AI insists on brightening a room despite instructions for "night" or "darkness," the prompt engineer must deploy negative prompts.`,
      `Negative prompting is the practice of explicitly instructing the AI on what not to include in the generated output. Rather than relying solely on the model to interpret "darkness," negative prompts serve as strict algorithmic guardrails, punishing the neural networks when they attempt to introduce unwanted brightness or generic stock photography aesthetics.`,
      `When negative prompting is supported, target these issues:`,
      `• Combating Default Brightness: (Negative Prompt: "Flat lighting, overexposed, bright, even lighting, global illumination") — Strips away the algorithm's tendency to light the scene uniformly.`,
      `• Preventing Unwanted Sources: (Negative Prompt: "Fill light, multiple light sources, studio lighting, ambient light, bounce light") — Forces the model to adhere strictly to the "single motivated light source".`,
      `• Destroying the "Stock Aesthetic": (Negative Prompt: "Oversaturated, plastic, airbrushed, stock photography, commercial look, glossy") — Removes the artificial smoothness and highly saturated colors.`,
      `• Maintaining Shadow Integrity: (Negative Prompt: "Washed out shadows, low contrast, milky blacks, noise in shadows, grainy darks") — Ensures that the negative space remains pitch black and visually rich.`,
      `There is a delicate balance to strike when manipulating the dark. If a creator prompts for a "dark room" and simultaneously includes "no light" in the negative prompt, the AI will likely fail, distort, or hallucinate, as the rendering engine requires some light data to calculate an image. Instead of banning light entirely, the negative prompt must ban the quality of bad, flat light.`,
      
      `PART V: SCULPTING CINEMATIC SETUPS IN THE PROMPT ENGINE`,
      `To achieve specific emotional resonances and professional aesthetic standards, creators should emulate physical studio lighting setups within the text prompt. Most high-end AI video models are heavily trained on professional filmmaking data and technical manuals, meaning they inherently understand industry-standard lighting terminology far better than casual, everyday descriptions.`,
      
      `Deconstructing the 3-Point System: The foundation of physical set lighting is the 3-point setup: the Key light (primary illuminator), the Fill light (softens shadows), and the Backlight (separates subject from background). When attempting chiaroscuro in AI, the goal is to aggressively manipulate this ratio, often eliminating the Fill light entirely to create maximum dramatic effect. By explicitly naming standard cinematic setups, prompt engineers can bypass the AI's guesswork:`,
      `• Rembrandt Lighting: Prompts utilizing "Rembrandt lighting" or "triangle shadow on cheek" will yield deeply emotional, classical portraits. This is the gold standard for dramatic, empathetic character introductions.`,
      `• Butterfly Lighting (The Paramount Look): Achieved by prompting "Butterfly lighting" or "high frontal key light." It casts a distinct, butterfly-shaped shadow directly under the nose and chin while heavily sculpting the cheekbones.`,
      `• Backlighting and Silhouette: To create mystery, use modifiers like "Harsh backlight," "Rim light," "Halo separation," or "Silhouette lighting." This fires light from behind the subject directly at the camera, leaving facial features completely hidden in pitch-black shadow.`,
      `• Gobo Projections: To mimic the classic 1940s Film Noir aesthetic, prompt for "Gobo projection," "Venetian blind shadows," or "window light patterns." This forces the AI to cast specific, sharp, geometric shadows directly across the subject's face.`,
      `• Negative Fill: In physical filmmaking, negative fill involves placing large black flags near the unlit side of a subject to absorb ambient room light. Prompting "Negative fill" or "Shadow control" signals the AI to physically crush the black levels on the unlit side of the subject.`,
      
      `Color Temperature - Mixing Kelvin Values for Depth: Beyond intensity and direction, the color temperature of the light carries deep emotional information that subconsciously influences the viewer's interpretation of the scene. By specifying Kelvin values or precise colors, creators can mix temperatures to create a high-budget, layered cinematic aesthetic.`,
      `• Warm Sources: Associated with intimacy, history, and comfort. Use modifiers like "Warm light ~2700K", "Candlelight", "Sodium vapor lighting", or "Golden hour glow".`,
      `• Cool Sources: Associated with isolation, technology, fear, and the supernatural. Use modifiers like "Daylight ~5600K", "Moonlight blue", "Blue hour twilight", or "Fluorescent cyberpunk glow".`,
      `• Mixed Lighting (The Blockbuster Look): Prompting for mixed color temperatures adds massive visual complexity. Modifiers like "Bi-color contrast" or "Teal and orange cinematic color grading" force the AI to utilize complementary colors in the highlights and the shadows.`,
      
      `PART VI: ELEVATING PHOTOREALISM - SUBSURFACE SCATTERING AND VOLUMETRICS`,
      `Generating pitch-black shadows and directional light is only half the battle in the pursuit of cinematic AI video. To cross the threshold from a "high-quality AI generation" to footage that is "indistinguishable from reality," the light interacting with the darkness must behave strictly according to the complex laws of real-world physics.`,
      `AI outputs frequently suffer from a "plastic," "smooth," or "painterly" look, especially in low-light environments or highly dramatic chiaroscuro scenes. This occurs because the neural network is calculating surface light, but failing to calculate how light physically penetrates and interacts with complex materials. Resolving this uncanny valley requires the integration of two advanced 3D rendering concepts into the prompt structure: Subsurface Scattering and Volumetric Lighting.`,
      
      `The Physics of Subsurface Scattering (SSS): In real-time 3D rendering and physical cinematography, light does not simply hit a solid surface and immediately bounce off. For many organic and translucent materials—most notably human skin, wax, marble, jade, and plant leaves—light actually penetrates the outer surface, scatters irregularly beneath the top layer, absorbs certain color wavelengths, and exits the surface at a different angle.`,
      `Human skin is highly translucent. In reality, only about 6% of light reflects directly off the surface of the skin (known as specular reflection); the remaining 94% of the visual information we see results from subsurface scattering. Beneath the skin surface, incoming light quickly becomes diffuse as it scatters through tissue layers. Without the AI calculating this complex light transport mechanism, AI-generated skin looks hard, dead, and metallic.`,
      `When working specifically with chiaroscuro, where the contrast between light and dark is extreme, the "terminator line"—the exact line of transition between the illuminated side of a face and the shadowed side—is critical. If this transition is too sharp, too black, and lacks the subtle red/orange bleed of Subsurface Scattering, the image instantly feels artificial and digitally generated.`,
      `The Prompt Application: By explicitly adding technical rendering terms like "Subsurface scattering", "Subtle SSS on skin", "Translucent material interaction", or "Light bleeding through skin" to the technical layer of a video prompt, the AI is mathematically forced to emulate this complex physical light transport mechanism. This injects an organic, soft, and lifelike depth to subjects emerging from deep shadows.`,
      
      `Sculpting the Air with Volumetric Lighting: In the physical world, light traveling through a vacuum is entirely invisible. The human eye only perceives beams of light when those photons interact with a participating medium—such as dust particles, smoke, atmospheric moisture, or fog—suspended in the air. This optical effect, known as volumetric light scattering, is absolutely vital for giving lighting a physical presence and tangible weight within a dark environment.`,
      `In AI video generation, flat, mathematically empty backgrounds often ruin the illusion of physical depth, making the subjects look like they are pasted onto a black digital canvas. By utilizing volumetric lighting, prompt engineers can create visible, physical shafts of light that pierce through the negative space, bridging the foreground and background while perfectly maintaining the surrounding darkness.`,
      `The Prompt Application: To give shadows physical depth, atmosphere, and a sense of location, creators must combine chiaroscuro prompts with volumetric keywords. Using modifiers such as "Volumetric lighting", "God rays", "Light rays piercing through atmospheric haze", "Dust motes floating in light beam", "Cinematic fog", or "Smoky environment" transforms the digital space. This allows the key light to sculpt the air itself rather than just illuminating the subject, creating the immersive, visceral atmosphere required for high-end dark fantasy, gritty thrillers, or emotional dramas.`,
      
      `CONCLUSION`,
      `The pursuit of cinematic perfection in artificial intelligence video generation is largely an adversarial battle against the neural network's innate, mathematically programmed desire for commercial clarity and flat illumination. By understanding the deep historical weight of chiaroscuro—from the stark, psychological violence of Caravaggio's Tenebrism to the melancholic, empathetic warmth of Rembrandt's Dutch lighting—creators can inject profound, human emotional resonance into an inherently sterile digital medium.`,
      `Achieving this mastery requires a sophisticated, highly structured approach to prompt engineering. It demands overriding the AI's stock-photography biases through aggressive terminology like "extreme chiaroscuro" and "pitch black negative space." It requires an advanced understanding of rendering physics, utilizing subsurface scattering to bring organic, breathing life to human skin, and volumetric lighting to give physical weight to the air itself. Finally, it necessitates the strategic deployment of negative prompts to act as strict algorithmic guardrails against flat, overexposed defaults.`,
      `Mastering the dark within AI is not simply the act of removing light; it is the deliberate, artistic control of what remains visible. By forcing the algorithmic models to respect the shadows, digital filmmakers and prompt engineers can transform synthetic, plastic generations into captivating, photorealistic cinematic narratives. This proves that even in the rapidly advancing age of neural networks, the most powerful and enduring visual stories are still, as they have been for centuries, sculpted entirely from the dark.`
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

// --- COMPONENTE PARA ROLAR PARA O TOPO SEMPRE QUE MUDAR DE PÁGINA ---
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#000000] text-[#E0E0E0] font-sans selection:bg-[#00D4FF] selection:text-white flex flex-col">
        
        {/* HEADER GLOBAL */}
        <header className="fixed top-0 w-full z-50 bg-[#121212]/90 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-2xl font-bold text-white tracking-wider flex items-center gap-2 hover:scale-105 transition-transform">
                <Play className="w-8 h-8 text-[#00D4FF]" fill="#00D4FF" />
                <span>AI<span className="text-[#00D4FF]">PROMPTS</span></span>
              </Link>
              <Link to="/glossary" className="hidden md:block text-sm font-bold tracking-widest text-gray-400 hover:text-white transition-colors">
                GLOSSARY
              </Link>
            </div>
            <a href="https://ko-fi.com/synthvisuals" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded-full flex items-center gap-2 hover:bg-yellow-500/10 transition-colors">
              <Heart size={18} /> DONATE
            </a>
          </div>
        </header>

        {/* ÁREA ONDE AS PÁGINAS MUDAM */}
        <main className="pt-16 pb-20 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/glossary" element={<GlossaryList />} />
            <Route path="/glossary/:articleId" element={<ArticleView />} />
            <Route path="/video/:videoId" element={<VideoView />} />
          </Routes>
        </main>

        {/* FOOTER GLOBAL */}
        <footer className="bg-[#121212] border-t border-gray-800 mt-auto">
          <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm flex items-center gap-2">
              <Play className="w-5 h-5 text-gray-500" /> © {new Date().getFullYear()} AI Prompts. All rights reserved.
            </div>
            <div className="flex gap-4">
              <button className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm font-medium">Terms</button>
              <button className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm font-medium">Privacy</button>
            </div>
            <a href="https://ko-fi.com/synthvisuals" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-[#F3CE56] font-semibold text-sm flex items-center gap-2 transition-colors">
              <Heart className="w-4 h-4" /> DONATE
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

// --- PÁGINA INICIAL (HOME) ---
function Home() {
  const [isPlayingHero, setIsPlayingHero] = useState(false); 
  const heroVideoId = "wvFRN2nX7WM"; 

  return (
    <div>
      <section className="relative w-full max-w-7xl mx-auto px-4 py-8">
        <div className="relative w-full aspect-video bg-[#121212] rounded-xl overflow-hidden border border-gray-800 shadow-[0_0_30px_rgba(0,212,255,0.1)] group">
          {isPlayingHero ? (
            <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${heroVideoId}?autoplay=1&rel=0`} title="Hero Video" frameBorder="0" allowFullScreen></iframe>
          ) : (
            <div className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center" onClick={() => setIsPlayingHero(true)}>
              <img src={`https://img.youtube.com/vi/${heroVideoId}/maxresdefault.jpg`} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors"></div>
              <div className="relative z-10 flex flex-col items-center gap-3 group-hover:scale-110 transition-transform">
                <div className="bg-red-600 text-white rounded-full p-5 shadow-[0_0_20px_rgba(220,38,38,0.6)] group-hover:bg-red-500 transition-colors">
                  <Play className="w-12 h-12 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-6 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">The Crow and the Throne</h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">A fully AI-generated Dark Fantasy cinematic journey. This 15-minute epic project explores the limits of visual storytelling, lighting consistency, and oppressive worldbuilding.</p>
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-sm text-gray-500 italic">Enjoyed the work? Consider supporting the creation of more free content.</p>
            <a href="https://ko-fi.com/synthvisuals" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#D4AF37] text-black hover:bg-[#F3CE56] px-8 py-3 rounded-full font-bold text-lg mx-auto w-fit">
              <Coffee className="w-5 h-5" fill="black" /> SUPPORT THE CREATOR
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-4"><div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div></div>

      <div className="max-w-7xl mx-auto px-4 pb-12 space-y-12">
        {CATEGORIES.map(category => {
          const categoryVideos = VIDEOS.filter(v => v.categoryId === category.id);
          if (categoryVideos.length === 0) return null;
          const CategoryIcon = category.icon;
          return (
            <section key={category.id} className="relative">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CategoryIcon className="w-5 h-5 text-[#00D4FF]" /> {category.name}
              </h2>
              <div className="flex flex-wrap gap-6 pb-4">
                {categoryVideos.map(video => (
                  <div key={video.id} className={`shrink-0 flex flex-col group ${video.aspect === '9/16' ? 'w-48' : 'w-72 md:w-80'}`}>
                    <div className={`relative w-full rounded-lg overflow-hidden bg-[#121212] border border-gray-800 group-hover:border-[#00D4FF]/50 transition-colors ${video.aspect === '9/16' ? 'aspect-[9/16]' : 'aspect-video'}`}>
                      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs font-mono rounded">{video.duration}</div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        {category.id === 'shorts' ? (
                          <button onClick={() => window.open(`https://www.youtube.com/shorts/${video.id}`, '_blank')} className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all flex items-center gap-2">
                            <Play className="w-4 h-4" fill="currentColor" /> WATCH
                          </button>
                        ) : (
                          // MUDANÇA 1: video.id → video.slug
                          <Link to={`/video/${video.slug}`} className="bg-[#00D4FF] hover:bg-[#66e5ff] text-black px-4 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all">
                            WATCH AND VIEW PROMPT
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-white font-medium text-sm line-clamp-2">{video.title}</h3>
                      {category.id !== 'shorts' && (
                        // MUDANÇA 2: video.id → video.slug
                        <Link to={`/video/${video.slug}`} className="mt-2 text-[#00D4FF] hover:text-white text-xs font-semibold tracking-wide flex items-center gap-1 transition-all hover:translate-x-1">
                          WATCH AND VIEW PROMPT <ArrowLeft className="w-3 h-3 rotate-180" />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

// --- PÁGINA DO VÍDEO INDIVIDUAL ---
function VideoView() {
  const { videoId } = useParams();
  // MUDANÇA 3: v.id === videoId → v.slug === videoId
  const video = VIDEOS.find(v => v.slug === videoId);
  const [copied, setCopied] = useState(false);

  if (!video) return <div className="text-white text-center py-20">Video not found.</div>;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 w-full animate-fade-in">
      <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-5 h-5" /> Back to Portfolio
      </Link>
      <div className={`relative mx-auto bg-[#121212] rounded-xl overflow-hidden border border-gray-800 shadow-2xl mb-8 ${video.aspect === '9/16' ? 'max-w-md aspect-[9/16]' : 'w-full aspect-video'}`}>
        <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`} title={video.title} frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{video.title}</h1>
            <span className="inline-block px-3 py-1 bg-gray-900 border border-gray-700 rounded-full text-xs text-gray-300">{CATEGORIES.find(c => c.id === video.categoryId)?.name}</span>
          </div>
          <div className="bg-[#121212] border border-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="bg-gray-900 px-4 py-3 flex items-center justify-between border-b border-gray-800">
              <span className="text-sm font-semibold text-gray-300">RAW PROMPT</span>
              <button onClick={() => handleCopy(video.prompt)} className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold transition-all ${copied ? 'bg-green-500/20 text-green-400' : 'bg-[#00D4FF]/10 text-[#00D4FF]'}`}>
                {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />} {copied ? 'COPIED!' : 'COPY PROMPT'}
              </button>
            </div>
            <div className="p-5 text-gray-300 font-mono text-sm leading-relaxed whitespace-pre-wrap">{video.prompt}</div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-[#D4AF37] mb-4 border-b border-gray-800 pb-2">Deductive Prompt Analysis</h3>
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed bg-[#121212]/50 p-6 rounded-xl border border-gray-800/50 whitespace-pre-wrap">{video.analysis}</div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-gradient-to-b from-[#121212] to-black border border-gray-800 rounded-xl p-6 text-center shadow-xl">
            <Heart className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            <h4 className="text-white font-bold mb-2">Support the Project</h4>
            <p className="text-sm text-gray-400 mb-6">If this prompt saved you hours of testing, consider buying me a coffee.</p>
            <a href="https://ko-fi.com/synthvisuals" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] text-black hover:bg-[#F3CE56] px-4 py-3 rounded-lg font-bold">
              $1 OR MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- PÁGINA DA LISTA DO GLOSSÁRIO ---
function GlossaryList() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 w-full animate-fade-in">
      <div className="text-center mb-16 mt-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Cinematic <span className="text-[#00D4FF]">Glossary</span></h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">A technical guide to the vocabulary used to command AI video models.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {GLOSSARY_TERMS.map((item) => (
          <div key={item.id} className="bg-[#121212] border border-gray-800 rounded-xl p-8 shadow-lg hover:border-gray-600 transition-all flex flex-col h-full group">
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-white group-hover:text-[#00D4FF] transition-colors mb-4">{item.term}</h2>
              <span className="inline-block px-3 py-1 mb-6 bg-gray-900 border border-gray-700 rounded-full text-xs font-semibold text-[#D4AF37]">{item.category}</span>
              <p className="text-gray-400 leading-relaxed mb-8 text-base">{item.definition}</p>
            </div>
            <div className="pt-6 border-t border-gray-800 mt-auto">
              <Link to={`/glossary/${item.id}`} className="flex items-center gap-2 text-[#00D4FF] hover:text-white text-sm font-bold tracking-widest transition-all hover:translate-x-2 w-fit">
                READ FULL ARTICLE <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors font-semibold">
          <ArrowLeft className="w-5 h-5" /> Back to Video Portfolio
        </Link>
      </div>
    </div>
  );
}

// --- PÁGINA DO ARTIGO INDIVIDUAL DO BLOG ---
function ArticleView() {
  const { articleId } = useParams();
  const article = GLOSSARY_TERMS.find(a => a.id === articleId);

  if (!article) return <div className="text-white text-center py-20">Article not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 w-full animate-fade-in">
      <Link to="/glossary" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00D4FF] mb-10 transition-colors font-semibold tracking-wide">
        <ArrowLeft className="w-5 h-5" /> Back to Glossary
      </Link>
      <article className="bg-[#121212] border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
        <header className="mb-10 border-b border-gray-800 pb-10 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 bg-gray-900 border border-gray-700 rounded-full text-sm font-bold text-[#D4AF37] tracking-widest">
            {article.category.toUpperCase()}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{article.term}</h1>
          <p className="text-xl text-gray-400 italic font-light max-w-2xl mx-auto">"{article.definition}"</p>
        </header>
        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          {article.fullArticle.map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed">{paragraph}</p>
          ))}
        </div>
        <div className="mt-12 bg-black/60 border border-[#00D4FF]/30 rounded-xl p-8 shadow-[0_0_20px_rgba(0,212,255,0.05)]">
          <h4 className="text-[#00D4FF] text-sm font-bold tracking-widest mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5" /> ACTIONABLE PROMPT ENGINEERING TIP
          </h4>
          <p className="text-gray-300 font-mono text-lg bg-black/50 p-4 rounded-lg border border-gray-800">{article.promptTip}</p>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center flex flex-col items-center justify-center">
          <p className="text-gray-500 text-sm mb-4">Did this article help you improve your AI generations?</p>
          <a href="https://ko-fi.com/synthvisuals" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#D4AF37] text-black hover:bg-[#F3CE56] px-8 py-3 rounded-full font-bold text-lg">
            <Coffee className="w-5 h-5" fill="black" /> SUPPORT SYNTHVISUALS
          </a>
        </div>
      </article>
    </div>
  );
}
